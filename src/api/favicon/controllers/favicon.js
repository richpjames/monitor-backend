"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::favicon.favicon");
