const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


const dataMapper = {

    async createUser(email, name, password) {

        await prisma.user.create({
            data: {
                email: email,
                name: name,
                password: password,
                role: `member`
            }
        })
    }
}

module.exports = dataMapper;
