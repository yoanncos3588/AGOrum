const { PrismaClient } = require(`@prisma/client`);
const prisma = new PrismaClient();
const errorController = require(`../controllers/errorController`);

/**
 * Middleware pour controller les informations saisies par l'utilisateur lors de l'inscription
 */
const validateRegisterForm = async (req, res, next) => {

    const regexEmail = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

    // supprime les espaces au début et fin du pseudo
    req.body.name = req.body.name.trim();

    // champs vides
    if (req.body.email === undefined || req.body.email === ""
        || req.body.name === undefined || req.body.name === ""
        || req.body.password === undefined || req.body.password === "") {
        console.log(`FAILED : EMPTY FIELDS`);
        return res.redirect(`/register?${errorController.urlParameter}=${errorController.formMissingFields}`);
    }

    // validation email
    if (!regexEmail.test(req.body.email)) {
        console.log(`FAILED : INVALID EMAIL`);
        return res.redirect(`/register?${errorController.urlParameter}=${errorController.formUnvalidEmail}`);
    }

    // mail unique
    try {
        await prisma.user.findUniqueOrThrow({ where: { email: req.body.email } });
        return res.redirect(`/register?${errorController.urlParameter}=${errorController.formNonUniqueEmail}`);
    } catch (error) {
        next();
    }

    //TODO PASSWORD (ACTUELLEMENT PAS GÉRÉ EN BDD SIMPLE STRING POUR EXEMPLE)

}

module.exports = validateRegisterForm;