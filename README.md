# Ania's memories - Semantic Search with SingleStore

This code is to support the tutorial created [here](https://www.youtube.com/watch?v=bV3_u0p0cik).

This app was created using `create-singlestoredb-app`

```sh
npx create-singlestoredb-app --template elegance-next
```
## Create Your Database
1. Sign up for [SingleStore](https://msql.co/3M7hEiH) and create a database
2. Use the following [script](Semantic%20Search%20with%20OpenAI%20Embedding.ipynb) in order to create a table in your database. This table will store Ania's memories as well as vector embeddings of each one.

## Start Development Environment
2. Create an `.env` file based on the `.env.sample` file
3. Install dependencies once by running: `npm i`
4. Build the application once by running: `npm run build`
5. Start development environment by running: `npm run dev`
6. Open [http://localhost:3000](http://localhost:3000) with your browser.


