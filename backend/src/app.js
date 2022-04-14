const fastify = require('fastify');

const a = 0;
const build = (opts = {}) => {
  const app = fastify(opts);
  app.get('/', async (request, reply) => {
    await reply.send({ hello: 'world' });
  });

  return app;
};

module.exports = { build };
