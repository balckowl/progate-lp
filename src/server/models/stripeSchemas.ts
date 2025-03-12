import { z } from "@hono/zod-openapi";


export const priceIdSchema = z.object({
    priceId : z.string().openapi({
      example: "price_1R1qlfGjULbsD36JnGYqnklo"
    })
  })


export const checkoutSchema = z.object({
  url: z.string().url().openapi({
    example: "https://checkout.stripe.com/c/pay/cs_test_a1Tnikh9Cj2gmUP6yvBjpKSUVDjVqEfu65LItH5KhKHDVL7VTTZEenjc94#fidkdWxOYHwnPyd1blpxYHZxWjA0VzR0bGJCb1BJZ3ZBNjNPU19jRFBiPU1yVUprQ3cydHBIb2xcSDBAcF1cYHE1SlVsR1U0S0xkQXxTR3VGQW81aUFtTTBGS31PSTdoNld8dzw1YTJxQHddNTVLX2c8U3NPaicpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl"
  })
})