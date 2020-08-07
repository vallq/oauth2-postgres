//create db connection
import * as dotenv from "dotenv";
import { Pool } from "pg";
import { ConnectionOptions } from "tls";

dotenv.config();

const isProduction: boolean | ConnectionOptions =
  process.env.NODE_ENV === "production";

const connectionString: string = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

export const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction,
});
