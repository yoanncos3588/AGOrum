const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


const dataMapper = {

    async main() {
        console.log('hello');
        const allUsers = await prisma.user.findMany()
        console.log(allUsers)
    },

    async createUser() {
        await prisma.user.create({
            data: {
                email: 'alice@prisma.io',
                name: 'Alice',
                password: 'toto',
                urlAvatar: null,
                role: `member`
            },
        })


        const allUsers = await prisma.user.findMany()

        console.dir(allUsers, { depth: null })
    }

}

module.exports = dataMapper;
