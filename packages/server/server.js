'use strict';

require('dotenv').config();
const { NODE_ENV, PORT } = process.env;

const fastify = require('fastify')({
  logger: {
    prettyPrint:
      NODE_ENV === 'development'
        ? {
            translateTime: 'HH:MM:ss Z',
            ignore: 'pid,hostname',
          }
        : false,
  },
});

fastify.register(require('fastify-swagger'), {
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: { title: 'fastify-api' },
  },
});
fastify.register(require('./routes/items'));

const startServer = async () => {
  try {
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(error);
    pricess.exit(1);
  }
};

startServer();
