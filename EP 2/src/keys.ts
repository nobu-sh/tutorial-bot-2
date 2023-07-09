import { getEnvVar } from "./utils/index.js";

export const Keys = {
  clientToken: getEnvVar('CLIENT_TOKEN'),
} as const;

export default Keys;
