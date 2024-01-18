import { type SchemaTypeDefinition } from "sanity";
import Expertise from "./schemas/expertise";
import Clients from "./schemas/clients";
import Referrer from "./schemas/referrer";
import Contact from "./schemas/contact";
import Pages from "./schemas/pages";
import Services from "./schemas/services";
import { Break } from "./common";
import ServicesPage from "./schemas/servicePage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    Expertise,
    Clients,
    Referrer,
    Contact,
    Pages,
    Services,
    Break,
    ServicesPage,
  ],
};
