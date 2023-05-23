const dataMapper = require("../db/dataMapper");

const mainController = {

    showHomePage(req, res) {
        res.render('index');
    }

}

module.exports = mainController;

