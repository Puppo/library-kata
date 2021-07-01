import { FastifyInstance, FastifyPluginCallback } from "fastify";
import { BookSchema } from "./models/book";

const booksRoute: FastifyPluginCallback = async (instance: FastifyInstance) => {
  instance.get(
    `/books`,
    {
      schema: {
        response: {
          200: BookSchema,
        },
      },
    },
    (req, rep) => {
      rep.status(200).send();
    }
  );
};

export default booksRoute;
