import "#internal/nitro/virtual/polyfill";

import { builder } from "@netlify/functions";
import { lambda } from "./netlify-lambda";

export const handler = builder(lambda);
