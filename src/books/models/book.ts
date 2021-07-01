import { Static, Type } from "@sinclair/typebox";
import { AuthorSchema } from "../../authors/models/author";

export const BookSchema = Type.Object({
  id: Type.String(),
  name: Type.String(),
  description: Type.String(),
  author: AuthorSchema,
});
export type Book = Static<typeof BookSchema>;
