const Clients = {
  title: "Clients",
  name: "clients",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "image",
      type: "image",
      options: {
        storeOriginalFilename: true,
      },
      fields: [{ type: "string", name: "alt" }],
    },
  ],
};

export default Clients;
