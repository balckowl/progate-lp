import { OpenAPIHono } from "@hono/zod-openapi";

export const app = new OpenAPIHono().basePath("/api");

export default app;
