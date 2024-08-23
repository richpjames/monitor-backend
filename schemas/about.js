export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "banner_image",
      title: "Banner",
      type: "image",
    },
  ],
};
