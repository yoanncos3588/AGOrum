const dataMapper = require("../db/dataMapper");

const userController = {

    async create(email, name, password) { await dataMapper.createUser(email, name, password); }

}

module.exports = userController;