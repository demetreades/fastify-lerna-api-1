const { v4: uuidv4 } = require('uuid');
let DATA = require('../DATA');

const getItems = (req, reply) => {
  reply.send(DATA);
};

const getItemById = (req, reply) => {
  const { id } = req.params;

  const item = DATA.find((item) => item.id == id);
  if (!item) throw new Error(`No item for id: ${id}`);

  reply.send(item);
};

const addNewItem = (req, reply) => {
  const { name } = req.body;

  const item = {
    id: uuidv4(),
    name,
  };

  DATA = [...DATA, item];

  reply.code(201).send(item);
};

const deleteItemById = (req, reply) => {
  const { id } = req.params;

  const items = DATA.filter((item) => item.id !== id);
  if (!items || items.length !== DATA.length)
    throw new Error(`No item for id: ${id}`);

  DATA = [...items];

  reply.code(200).send({ message: `Item ${id} had been removed` });
};

const updateItemById = (req, reply) => {
  const { id } = req.params;
  const { name } = req.body;

  items = DATA.map((item) => (item.id == id ? { id, name } : item));
  const item = items.find((item) => item.id == id);
  if (!item) throw new Error(`No item for id: ${id}`);

  DATA = [...items];

  reply.code(201).send(item);
};

module.exports = {
  getItems,
  getItemById,
  addNewItem,
  deleteItemById,
  updateItemById,
};
