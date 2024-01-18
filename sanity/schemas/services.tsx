import {
  CtaContent,
  ImageContent,
  ImageContentWithName,
  PageContent,
} from "@studio/common";

const Services = {
  title: "Services",
  name: "services",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "description",
      type: "string",
    },
    {
      name: "priority",
      type: "number",
    },
    {
      name: "slug",
      type: "string",
    },
    {
      name: "pageData",
      type: "object",
      fields: [
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
    },
  ],
};

export default Services;
