import { OpenAPIHono } from "@hono/zod-openapi";
import { getCheckoutUrlRoute, getStripeProductsRoute } from "./routes/stripeRoute";
import { createStripeUserHander } from "./controllers/createStripeUser";
import { swaggerUI } from "@hono/swagger-ui";
import { getStripeProductsHandler } from "./controllers/getStripeProducts";
import { createStripeUserRoute, getPurchasedBoolRoute, getPurchasedUsersRoute } from "./routes/userRoute";
import { getCheckoutUrlHandler } from "./controllers/getCheckoutUrl";
import { getPurchasedUsersHandler } from "./controllers/getPurchasedUsers";
import { getPurchasedBoolHandler } from "./controllers/getPurchaseBool";
import { basicAuth } from "hono/basic-auth";
import { env } from "@/env";

export const app = new OpenAPIHono().basePath("/api");

const usersApp = new OpenAPIHono()
    .openapi(createStripeUserRoute, createStripeUserHander)
    .openapi(getPurchasedUsersRoute, getPurchasedUsersHandler)
    .openapi(getPurchasedBoolRoute, getPurchasedBoolHandler)

const productsApp = new OpenAPIHono()
    .openapi(getStripeProductsRoute, getStripeProductsHandler)

const checkoutApp = new OpenAPIHono()
    .openapi(getCheckoutUrlRoute, getCheckoutUrlHandler)

const mainApp = new OpenAPIHono()
    .route("/users", usersApp)
    .route("/products", productsApp)
    .route("/checkout", checkoutApp)

const route = app.route("/", mainApp)

app.doc("/specification", {
    openapi: "3.0.0",
    info: { title: "Honote API", version: "1.0.0" },
  }).use('/doc/*', async (c, next) => {
    const auth = basicAuth({
      username: env.API_DOC_BASIC_AUTH_USER, 
      password: env.API_DOC_BASIC_AUTH_PASS, 
    });
    return auth(c, next);
  }).get("/doc", swaggerUI({ url: "/api/specification" }));

export type AppType = typeof route;
export default app;
