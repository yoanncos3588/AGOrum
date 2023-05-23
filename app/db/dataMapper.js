const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const dataMapper = {

    /**
     * Create user matching prisma
     * @param {string} email
     * @param {string} name
     * @param {string} password
     * @returns {boolean} True if success / false on error
     */
    async createUser(email, name, password) {
        try {
            await prisma.user.create({
                data: {
                    email: email,
                    name: name,
                    password: password,
                    role: `member`
                }
            })
            return true;
        } catch (error) {
            return false;
        }
    },


}

module.exports = dataMapper;
