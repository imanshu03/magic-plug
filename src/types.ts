import { ContactCollection, DynamicPageCollection } from "@studio/types";

export interface LinkData {
  linkData: {
    contact: ContactCollection;
    social: ContactCollection;
    primaryPage: DynamicPageCollection;
    secondaryPage: DynamicPageCollection;
  };
}
