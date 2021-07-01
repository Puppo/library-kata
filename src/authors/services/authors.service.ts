import { stringify } from "querystring";
import { request } from "undici";
import {} from "ajv";
import { BASE_API_URL } from "../../shared/constants/api";
import validate from "../../shared/services/validation";

import { Authors, AuthorSearchResponseSchema } from "../models/author";

export const search = async (terms: string): Promise<Authors> => {
  const { body } = await request(
    `${BASE_API_URL}/search/authors.json?${stringify({ q: terms })}`
  );

  if (validate(AuthorSearchResponseSchema, body)) {
    return body.docs;
  }

  throw new Error("Invalid Schema");
};
