import { z } from "@hono/zod-openapi";

export const purchasedUserSchema = z.object({
  name: z.string().openapi({
    example: "CatsEleven"
  }),
  image: z.string().nullable().openapi({
    example: "https://avatars.githubusercontent.com/u/121713821?v=4"
  }),
  planType: z.string().openapi({
    example: "Free"
  })
})


