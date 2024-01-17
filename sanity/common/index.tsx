import { defineArrayMember } from "sanity";

export const Break = {
  name: "break",
  type: "object",
  title: "Break",
  fields: [
    {
      name: "margin",
      type: "boolean",
    },
    {
      name: "direction",
      type: "string",
      options: {
        list: ["up", "down"],
      },
    },
  ],
};

export const PageContent = defineArrayMember({
  type: "block",
  marks: {
    decorators: [
      { title: "Strong", value: "strong" },
      { title: "Emphasis", value: "em" },
      { title: "Code", value: "code" },
      { title: "Underline", value: "underline" },
      { title: "Strike", value: "strike-through" },
      {
        title: "Coloured Strong",
        value: "colouredStrong",
        component: (props) => (
          <strong className="text-theme">{props.children}</strong>
        ),
        icon: () => "CB",
      },
      {
        title: "Highlight",
        value: "highlight",
        component: (props) => (
          <span className="text-theme">{props.children}</span>
        ),
        icon: () => "Color",
      },
    ],
    annotations: [
      {
        name: "link",
        type: "object",
        fields: [
          {
            name: "href",
            type: "string",
          },
        ],
      },
      {
        name: "internalLink",
        type: "object",
        fields: [
          {
            name: "href",
            type: "string",
          },
        ],
      },
    ],
  },
});

export const ImageContent = {
  type: "image",
  options: {
    storeOriginalFilename: true,
  },
  fields: [
    {
      type: "string",
      name: "alt",
    },
    {
      type: "boolean",
      name: "isInline",
    },
    {
      type: "string",
      name: "className",
    },
    {
      type: "boolean",
      name: "after",
    },
  ],
};

export const ImageContentWithName = {
  name: "image",
  ...ImageContent,
};

export const CtaContent = {
  name: "cta",
  type: "object",
  fields: [
    { name: "title", type: "string" },
    { name: "slug", type: "string" },
  ],
};
