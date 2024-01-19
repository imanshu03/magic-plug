export type Services = {
  name: string;
  description: string;
  priority: number;
  slug: string;
};

type Referrer = {
  name: string;
  priority: number;
};

type Expertise = Omit<
  Services & {
    image: string;
  },
  "slug"
>;

type Contact = {
  name: string;
  link: string;
  priority: string;
  social: boolean;
  description: string;
};

// type DynamicPageSlugs = {
//   slug: {
//     title: string;
//     path: string;
//   };
//   mainPage: boolean;
// };

type Clients = {
  name: string;
  image: any;
};

// export type DynamicPageData = {
//   pageTitle: string;
//   description: any;
//   content: any;
//   image?: {
//     asset: any;
//     alt: string;
//     className?: string;
//     isInline: boolean;
//     after: boolean;
//   };
//   cta?: {
//     title: string;
//     slug: string;
//   };
// };

// export type DynamicServicePageData = {
//   pageTitle: string;
//   description?: any;
//   cta?: {
//     title: string;
//     slug: string;
//   };
//   image?: {
//     asset: any;
//     alt: string;
//     className?: string;
//     isInline: boolean;
//     after: boolean;
//   };
//   servicesDescription?: any;
//   servicesProvided?: Array<{
//     heading: string;
//     description: string;
//   }>;
// };

export type ExpertiseCollection = Array<Expertise>;
// export type ServiceCollection = Array<Services>;
export type ReferrerCollection = Array<Referrer>;
export type ContactCollection = Array<Contact>;
// export type DynamicPageCollection = Array<DynamicPageSlugs>;
export type ClientsCollection = Array<Clients>;
