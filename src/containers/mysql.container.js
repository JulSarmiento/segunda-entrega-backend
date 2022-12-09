const knex = require("knex");
const knexConfig = require("../../MYSQL/config");

class Container {
  constructor(tableName) {
    this.tableName = tableName;
    this.knex = knex(knexConfig);
  }

  async create(value) {
    return this.knex(this.tableName)
      .insert(value)
      .then(([id]) => id);
  }

  async getAll() {
    return this.knex(this.tableName);
  }

  async getById(id) {
    return this.knex(this.tableName)
      .where({ id: id })
      .then(([id]) => id);
  }

  async update(id, data) {
    return this.knex(this.tableName).where({ id }).update(data);
  }

  async deleteById(id) {
    return this.knex(this.tableName).where({ id }).del();
  }
}

module.exports = Container;
