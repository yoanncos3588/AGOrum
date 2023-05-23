const errorController = require("./errorController");
const dataMapper = require(`../db/dataMapper`);


const registerController = {

    /**
     * Route GET pour création de compte
     * @param {object} req
     * @param {object} res
     */
    showRegister(req, res) {

        const errorUrlParam = req.query[errorController.urlParameter];

        if (errorUrlParam) {
            console.log(errorUrlParam);
            res.locals[errorController.resParameter] = errorController.showError(errorUrlParam);
        }
        res.render(`register`);
    },


    /**
     * Route POST pour création de compte (données controlées en amont via middleware)
     * @param {object} req
     * @param {object} res
     */
    async registerUser(req, res) {
        try {
            await dataMapper.createUser(req.body.email, req.body.name, req.body.password);
            res.redirect(`login`);
        } catch (error) {
            res.status(500).send(`aie`);
        }
    }

}

module.exports = registerController;