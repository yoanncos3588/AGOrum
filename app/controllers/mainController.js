const dataMapper = require("../db/dataMapper");

const mainController = {

    async showHomePage(req, res) {
        res.render('index');
    }

}

module.exports = mainController;

