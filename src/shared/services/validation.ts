import { TSchema, Static } from "@sinclair/typebox";
import addFormats from "ajv-formats";
import Ajv from "ajv";

// Setup
const ajv = addFormats(new Ajv(), [
  "date-time",
  "time",
  "date",
  "email",
  "hostname",
  "ipv4",
  "ipv6",
  "uri",
  "uri-reference",
  "uuid",
  "uri-template",
  "json-pointer",
  "relative-json-pointer",
  "regex",
])
  .addKeyword("kind")
  .addKeyword("modifier");

export default function <Schema extends TSchema>(
  type: Schema,
  data: unknown
): data is Static<Schema> {
  return ajv.validate(type, data);
}
