import { Elysia, t } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello Elysia")

  .get("/id/1", () => "static path")
  .get("/id/:id/*", ({ params }) => {
    const param = params["*"];
    const id = params["id"];

    return `wildcard param : ${param}-${id}`;
  })

  .post("/form", ({ body }) => body)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
