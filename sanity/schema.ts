import { type SchemaTypeDefinition } from "sanity";
import Expertise from "./schemas/expertise";
import Services from "./schemas/services";
import Clients from "./schemas/clients";
import Referrer from "./schemas/referrer";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Expertise, Services, Clients, Referrer],
};
