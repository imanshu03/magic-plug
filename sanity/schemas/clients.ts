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
      name: "link",
      type: "url",
    },
    {
      name: "image",
      type: "image",
      options: {
        storeOriginalFilename: true,
      },
    },
  ],
};

export default Clients;
