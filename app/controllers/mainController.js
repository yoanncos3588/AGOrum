const dataMapper = require("../db/dataMapper");

const mainController = {

    async showHomePage(req, res) {
        dataMapper.main;
        res.render('index');
    }

}

module.exports = mainController;