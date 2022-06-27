module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    client: "sqlite",
    connection: {
      filename: env("DATABASE_FILENAME", ".tmp/data.db"),
    },
    useNullAsDefault: true,
  },
  options: {},
});
