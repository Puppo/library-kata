import fastify from "fastify";

import authorsRoute from "./authors/route";
import booksRoute from "./books/route";

const server = fastify({ logger: true });

server.register(authorsRoute);
server.register(booksRoute);

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
