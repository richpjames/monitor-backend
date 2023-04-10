export default {
  name: "eventList",
  title: "Events list",
  type: "document",
  fields: [
    {
      name: "events",
      title: "Events",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
  ],
};
