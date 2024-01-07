const Expertise = {
  title: "Expertise",
  name: "expertise",
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
      name: "image",
      type: "image",
      options: {
        storeOriginalFilename: true,
      },
    },
    {
      name: "priority",
      type: "number",
    },
  ],
};

export default Expertise;
