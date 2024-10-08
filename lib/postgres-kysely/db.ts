import { createKysely } from "@vercel/postgres-kysely";
import { Database } from "./types";

const db = createKysely<Database>();

export default db;
