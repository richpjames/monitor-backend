export default {
  name: "event",
  title: "Individual events",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "artists",
      title: "Artists",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "slug",
      title: "Slug",
      type: "string",
      description: "For the URL of the product",
    },
    {
      name: "date",
      title: "date",
      type: "date",
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
    },
    {
      name: "url",
      title: "Url",
      type: "number",
      description: "The number at the end of the vimeo URL",
    },
    {
      name: "blurb_1",
      title: "Blurb 1",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "blurb_2",
      title: "Blurb 2",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
