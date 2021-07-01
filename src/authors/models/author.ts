import { Static, Type } from "@sinclair/typebox";

export const AuthorQueryStringSchema = Type.Object({
  q: Type.String(),
});
export type AuthorQueryString = Static<typeof AuthorQueryStringSchema>;

export const AuthorSchema = Type.Object({
  key: Type.String(),
  name: Type.String(),
});
export type Author = Static<typeof AuthorSchema>;

export const AuthorsSchema = Type.Array(AuthorSchema);
export type Authors = Static<typeof AuthorsSchema>;

export const AuthorSearchResponseSchema = Type.Object({
  docs: AuthorsSchema,
});
