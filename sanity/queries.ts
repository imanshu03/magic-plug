import { sanityClient } from "./client";
import { cache } from "react";
import type {
  ClientsCollection,
  ContactCollection,
  DynamicPageCollection,
  DynamicPageData,
  DynamicServicePageData,
  ExpertiseCollection,
  ReferrerCollection,
  ServiceCollection,
} from "./types";

export const getExpertise = cache(async () => {
  let result: ExpertiseCollection = [];
  try {
    const data = await sanityClient.fetch(`
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
    const data = await sanityClient.fetch(`
          *[_type == "services"]{
              name,
              description,
              priority,
              slug
            } | order(priority desc)`);
    result = data;
  } finally {
    return result;
  }
};

export const getServiceData = async () => {
  let result: ServiceCollection = [];
  try {
    const data = await sanityClient.fetch(`
          *[_type == "services"]{
              name,
              description,
              priority,
              slug
            } | order(priority desc)`);
    result = data;
  } finally {
    return result;
  }
};

export const getReferrers = async () => {
  let result: ReferrerCollection = [];
  try {
    const data = await sanityClient.fetch(`
            *[_type == "referrer"]{
                name,
                priority
              } | order(priority desc)`);
    result = data;
  } finally {
    return result;
  }
};

export const getSocialLinks = async () => {
  let result: ContactCollection = [];
  try {
    const data = await sanityClient.fetch(`
            *[_type == "contact"]{
              name,
              link,
              social,
              priority
            } | order(priority desc)`);
    result = data;
  } finally {
    return result;
  }
};

export const getDynamicPages = async () => {
  let result: DynamicPageCollection = [];
  try {
    const data = await sanityClient.fetch(`
            *[_type == "pages" && show == true]{
              slug,
              mainPage,
              priority
            } | order(priority desc)`);
    result = data;
  } finally {
    return result;
  }
};

export const getPageData = async (slug: string) => {
  let result: DynamicPageData | null = null;

  try {
    const data = await sanityClient.fetch(`
            *[_type == "pages" && slug.path == "/${slug}"]{
              content,
              image,
              pageTitle,
              description,
              cta,
              footer
            }`);
    if (data.length) {
      result = data[0];
    }
  } finally {
    return result;
  }
};

export const getClients = async () => {
  let result: ClientsCollection = [];
  try {
    const data = await sanityClient.fetch(`
      *[_type == "clients"]{
        name,
        image,
        _createdAt
      } | order(_createdAt asc)
    `);
    result = data;
  } finally {
    return result;
  }
};

export const getServicesPage = async (slug: string) => {
  let result: DynamicServicePageData | null = null;

  try {
    const data = await sanityClient.fetch(`
            *[_type == "servicesPage" && slug == "${slug}"]{
              pageTitle,
              description,
              servicesDescription,
              servicesProvided,
              cta,
              image
            }`);
    if (data.length) {
      result = data[0];
    }
  } finally {
    return result;
  }
};
