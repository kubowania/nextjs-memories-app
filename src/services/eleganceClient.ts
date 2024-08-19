import { createEleganceClient } from "@singlestore/elegance-sdk"

const appURL =
  process.env.NEXT_PUBLIC_APP_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000"

export const eleganceClient = createEleganceClient("mysql", { baseURL: `${appURL}/api` })
