import {
  CtaContent,
  ImageContent,
  ImageContentWithName,
  PageContent,
} from "@studio/common";

const Pages = {
  title: "Pages",
  name: "pages",
  type: "document",
  fields: [
    {
      name: "slug",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        { name: "path", type: "string" },
      ],
    },
    {
      name: "priority",
      type: "number",
    },
    {
      name: "mainPage",
      type: "boolean",
    },
    {
      name: "show",
      type: "boolean",
    },
    {
      name: "pageTitle",
      type: "string",
    },
    CtaContent,
    {
      name: "description",
      type: "array",
      of: [PageContent, ImageContent],
    },
    ImageContentWithName,
    {
      title: "Content",
      name: "content",
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
      name: "footer",
      type: "array",
      of: [PageContent, ImageContent, { type: "break" }],
    },
  ],
  initialValue: {
    show: false,
    mainPage: false,
  },
};

export default Pages;
