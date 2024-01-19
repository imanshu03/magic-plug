import { ContactCollection } from "@studio/types";
import { PAGE_DATA_TYPE } from "./dataStore/page";

export interface LinkData {
  linkData: {
    contact: ContactCollection;
    social: ContactCollection;
    primaryPage: PAGE_DATA_TYPE[];
    secondaryPage: PAGE_DATA_TYPE[];
  };
}
