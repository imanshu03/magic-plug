type Services = {
  name: string;
  description: string;
  priority: number;
};

type Referrer = {
  name: string;
  priority: number;
};

type Expertise = Services & {
  image: string;
};

export type ExpertiseCollection = Array<Expertise>;
export type ServiceCollection = Array<Services>;
export type ReferrerCollection = Array<Referrer>;
