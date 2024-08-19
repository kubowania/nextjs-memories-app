import { createEleganceServerClient } from "@singlestore/elegance-sdk/server"

let extraSettings

if (process.env.TIER === "shared") {
  let cert
  fetch("https://portal.singlestore.com/static/ca/singlestore_bundle.pem")
    .then(function (response) {
      response.text().then(function (text) {
        cert = text
      })
    })

  extraSettings = {
    ssl: {
      cert
    }
  }
}

export const eleganceServerClient = createEleganceServerClient("mysql", {
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
    ...extraSettings
  },
  ai: {
    openai: {
      apiKey: process.env.OPENAI_API_KEY
    }
  }
})
