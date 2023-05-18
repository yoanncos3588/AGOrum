const { PrismaClient } = require(`@prisma/client`);
const prisma = new PrismaClient()
const errorController = require(`../controllers/errorController`);

const validateRegisterForm = (req, res, next) => {

    /**TODO : controlle via regex */

    if (req.body.email === undefined
        || req.body.name === undefined
        || req.body.password === undefined) {
        console.log(`FAILED : EMPTY FIELDS`);
        return res.redirect(`/register?error=formMissingFields`);
    }

    if (prisma.user.findUnique({ where: { email: req.body.email } })) {
        console.log(`FAILED : NON UNIQUE`);
        return res.redirect(`/register?error=formNonUniqueField`);
    }

    next();

}

module.exports = validateRegisterForm;