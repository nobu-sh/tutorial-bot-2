import { config } from "dotenv";
import { resolve } from "path";

const EnvFile = process.env.NODE_ENV === "development" 
  ? ".dev.env" 
  : ".env";

const EnvFilePath = resolve(process.cwd(), EnvFile);

config({ path: EnvFilePath });

console.log(process.env.TEST);
