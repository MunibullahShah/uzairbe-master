const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

module.exports = {
  async create(ctx) {
    try {
      let entity;
      console.log(ctx.request.body);

      entity = await strapi.services.ad.create(ctx.request.body);
      return sanitizeEntity(entity, { model: strapi.models.ad });
    } catch (error) {
      return ctx.badRequest(error);
    }
  },
};
