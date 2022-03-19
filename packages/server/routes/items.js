'use strict';

const {
  getItems,
  getItemById,
  addNewItem,
  deleteItemById,
  updateItemById,
} = require('../controllers/items');

// item schema
const Item = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
  },
};

const getItemsOptions = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: Item,
      },
    },
  },
  handler: getItems,
};

const getItemOptions = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getItemById,
};

const addItemOptions = {
  schema: {
    // body: {
    //   type: 'object',
    //   required: ['name'],
    //   properties: {
    //     name: { type: 'string' },
    //   },
    // },
    response: {
      201: Item,
    },
  },
  handler: addNewItem,
};

const deleteItemOptions = {
  schema: {
    // body: {
    //   type: 'object',
    //   required: ['name'],
    //   properties: {
    //     id: { type: 'string' },
    //     name: { type: 'string' },
    //   },
    // },
    response: {
      204: {
        type: 'object',
        message: { type: 'string' },
      },
    },
  },
  handler: deleteItemById,
};

const updateItemOptions = {
  schema: {
    // body: {
    //   type: 'object',
    //   required: ['name'],
    //   properties: {
    //     id: { type: 'string' },
    //     name: { type: 'string' },
    //   },
    // },
    response: {
      200: Item,
    },
  },
  handler: updateItemById,
};

function itemRoutes(fastify, options, done) {
  fastify.get('/items', getItemsOptions);
  fastify.get('/items/:id', getItemOptions);
  fastify.post('/items', addItemOptions);
  fastify.put('/items/:id', updateItemOptions);
  fastify.delete('/items/:id', deleteItemOptions);

  done();
}

module.exports = itemRoutes;
