const errorController = require("./errorController");
const userController = require(`./userControllers`);


const registerController = {

    showRegister(req, res) {
        if(req.query.error) {
            res.locals.errorMessage = errorController.showError(req.query.error);
        }
        res.render(`register`);
    },

    async registerUser(req, res) {
        try {
            await userController.create(req.body.email, req.body.name, req.body.password);
            res.redirect(`login`);
        } catch (error) {
            console.log(error.log);
            console.log(error.stack);
            res.status(500).send(`aie`);
        }
    }

}

module.exports = registerController;