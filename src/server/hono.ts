import { OpenAPIHono } from "@hono/zod-openapi";
import { getCheckoutUrlRoute, getStripeProductsRoute } from "./routes/stripeRoute";
import { createStripeUserHander } from "./controllers/createStripeUser";
import { swaggerUI } from "@hono/swagger-ui";
import { getStripeProductsHandler } from "./controllers/getStripeProducts";
import { createStripeUserRoute } from "./routes/userRoute";
import { getCheckoutUrlHandler } from "./controllers/getCheckoutUrl";

export const app = new OpenAPIHono().basePath("/api");

const userApp = new OpenAPIHono()
    .openapi(createStripeUserRoute, createStripeUserHander)

app.route("/users", userApp)


const productApp = new OpenAPIHono()
    .openapi(getStripeProductsRoute, getStripeProductsHandler)

app.route("/products", productApp)


const checkoutApp = new OpenAPIHono()
    .openapi(getCheckoutUrlRoute, getCheckoutUrlHandler)

app.route("/checkout", checkoutApp)




app.doc("/specification", {
    openapi: "3.0.0",
    info: { title: "Honote API", version: "1.0.0" },
}).get("/doc", swaggerUI({ url: "/api/specification" }));

export default app;
