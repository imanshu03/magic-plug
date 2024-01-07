import { client } from "./lib/client";
import { cache } from "react";
import type {
  ExpertiseCollection,
  ReferrerCollection,
  ServiceCollection,
} from "./types";

export const getExpertise = cache(async () => {
  let result: ExpertiseCollection = [];
  try {
    const data = await client.fetch(`
        *[_type == "expertise"]{
            name,
            description,
            "image": image.asset->url,
            priority
          } | order(priority desc)`);
    result = data;
  } finally {
    return result;
  }
});

export const getServices = async () => {
  let result: ServiceCollection = [];
  try {
    const data = await client.fetch(`
          *[_type == "services"]{
              name,
              description,
              priority
            } | order(priority desc)`);
    result = data;
  } finally {
    return result;
  }
};

export const getReferrers = async () => {
  let result: ReferrerCollection = [];
  try {
    const data = await client.fetch(`
            *[_type == "referrer"]{
                name,
                priority
              } | order(priority desc)`);
    result = data;
  } finally {
    return result;
  }
};
