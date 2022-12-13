export default {
  name: "occasions-descriptions",
  title: "Occasions descriptions",
  type: "document",
  fields: [
    {
      name: "descriptions",
      title: "descriptions",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
