const knex = require('knex');
const knexConfig = require('../../SQL/config');

class Container {
  constructor(tableName) {
    this.tableName = tableName;
    this.knex = knex(knexConfig);
  }

  async create(value) {
    return new Promise((resolve, reject) => {
      this.knex(this.tableName)
        .insert(value)
        .then((id) => {
          resolve(id);
        })
        .catch((err) => {
          reject(err);
        })

    });
  }

  async getAll() {
    return new Promise((resolve, reject) => {
      this.knex(this.tableName)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        })

    });
  }

  async getById(id) {
    return new Promise((resolve, reject) => {
      this.knex(this.tableName)
        .where({ id: id })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        })

    });
  }

  async update(valueid, data) {
    return new Promise((resolve, reject) => {
      this.knex(this.tableName)
        .where({ id: valueid })
        .update(data)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        })

    });
  }

  async deleteById(id) {
    return new Promise((resolve, reject) => {
      this.knex(this.tableName)
        .where({ id: id })
        .del()
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        })

    });
  }

}

module.exports = Container;