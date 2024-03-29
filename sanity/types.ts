export type Services = {
  name: string;
  description: string;
  priority: number;
  slug: string;
  image?: any;
};

type Referrer = {
  name: string;
  priority: number;
};

type Expertise = Omit<Services, "slug" | "image"> & {
  image: string;
};

type Contact = {
  name: string;
  link: string;
  priority: string;
  social: boolean;
  description: string;
};

type DynamicPageSlugs = {
  slug: {
    title: string;
    path: string;
  };
  mainPage: boolean;
};

type Clients = {
  name: string;
  image: any;
};

type Testimonials = {
  name: string;
  company: string;
  review: string;
  rating: number;
};

export type DynamicPageData = {
  pageTitle: string;
  description: any;
  content: any;
  image?: {
    asset: any;
    alt: string;
    className?: string;
    isInline: boolean;
    after: boolean;
  };
  cta?: {
    title: string;
    slug: string;
  };
};

export type DynamicServicePageData = {
  pageTitle: string;
  description?: any;
  cta?: {
    title: string;
    slug: string;
  };
  image?: {
    asset: any;
    alt: string;
    className?: string;
    isInline: boolean;
    after: boolean;
  };
  servicesDescription?: any;
  servicesProvided?: Array<{
    heading: string;
    description: string;
  }>;
  footer: any;
};

export type StatsSchema = {};

export type ExpertiseCollection = Array<Expertise>;
export type ServiceCollection = Array<Services>;
export type ReferrerCollection = Array<Referrer>;
export type ContactCollection = Array<Contact>;
export type DynamicPageCollection = Array<DynamicPageSlugs>;
export type ClientsCollection = Array<Clients>;
export type TestimonialsCollection = Array<Testimonials>;
