import { FastifyInstance, FastifyPluginCallback } from "fastify";
import {
  AuthorQueryString,
  AuthorQueryStringSchema,
  AuthorSchema,
} from "./models/author";
import { search } from "./services/authors.service";

const authorsRoute: FastifyPluginCallback = async (
  instance: FastifyInstance
) => {
  instance.get<{
    Querystring: AuthorQueryString;
  }>(
    `/`,
    {
      schema: {
        querystring: AuthorQueryStringSchema,
        response: {
          200: AuthorSchema,
        },
      },
    },
    async (req, rep) => {
      const { query } = req;
      console.log(query, query);
      const authors = await search(query.q);
      rep.status(200).send(authors);
    }
  );
};

export default authorsRoute;
