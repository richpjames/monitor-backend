export default {
  name: "favicon",
  title: "Favicon",
  type: "document",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Favicon Image",
      validation: (Rule) => Rule.required(),
      options: {
        accept: "image/png", // Restrict to PNG
      },
    },
  ],
};
