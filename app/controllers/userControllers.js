const dataMapper = require("../db/dataMapper");

const userController = {

    /**
     * Add an user to DB via dataMapper
     * @param {String} email
     * @param {String} name
     * @param {String} password
     */
    async create(email, name, password) { await dataMapper.createUser(email, name, password); }

}

module.exports = userController;