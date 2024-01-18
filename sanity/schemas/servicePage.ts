import {
  CtaContent,
  ImageContent,
  ImageContentWithName,
  PageContent,
} from "@studio/common";

const ServicesPage = {
  title: "Services Page",
  name: "servicesPage",
  type: "document",
  fields: [
    {
      name: "slug",
      type: "string",
    },
    {
      name: "pageTitle",
      type: "string",
    },
    {
      name: "description",
      type: "array",
      of: [
        PageContent,
        ImageContent,
        {
          type: "break",
        },
      ],
    },
    CtaContent,
    ImageContentWithName,
    {
      name: "servicesDescription",
      type: "array",
      of: [
        PageContent,
        ImageContent,
        {
          type: "break",
        },
      ],
    },
    {
      name: "servicesProvided",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "heading", type: "string" },
            { name: "description", type: "string" },
          ],
        },
      ],
    },
    {
      name: "techDescription",
      type: "array",
      of: [
        PageContent,
        ImageContent,
        {
          type: "break",
        },
      ],
    },
    {
      name: "techStack",
      type: "array",
      of: [ImageContent],
    },
    {
      name: "footer",
      type: "array",
      of: [PageContent, ImageContent, { type: "break" }],
    },
  ],
};

export default ServicesPage;
