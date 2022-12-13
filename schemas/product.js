export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "string",
      description: "For the URL of the product",
    },
    {
      name: "date_published",
      title: "Date published",
      type: "date",
    },
    {
      name: "price_id",
      title: "Price ID",
      type: "string",
      description: "The price ID from Stripe",
    },
    {
      name: "inventory",
      title: "Inventory",
      type: "number",
      description: "Suggest using 10 (in stock) or 0 (out of stock)",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "product_type",
      title: "Product type",
      type: "string",
    },
    {
      name: "page_order",
      title: "Page order",
      type: "number",
      descriptions: "The order on the page the item should be in",
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
    {
      name: "photos",
      title: "Photos",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().min(4).max(4),
    },
    {
      name: "thumbnail_image",
      title: "Thumbnail image",
      type: "image",
    },
  ],
};
