import { OpenAPIHono } from "@hono/zod-openapi";
import { createStripeUserRoute } from "./routes/userRoute";
import { createStripeUserHander } from "./controllers/createStripeUser";
import { swaggerUI } from "@hono/swagger-ui";

export const app = new OpenAPIHono().basePath("/api");

const userApp =  new OpenAPIHono()
    .openapi(createStripeUserRoute, createStripeUserHander)

app.route("/users", userApp)

app.doc("/specification", {
    openapi: "3.0.0",
    info: { title: "Honote API", version: "1.0.0" },
  }).get("/doc", swaggerUI({ url: "/api/specification" }));

export default app;
