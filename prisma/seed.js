const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function main() {
    const fakeData = await prisma.category.create({
        data:
        {
            name: `Sports`,
            description: `In laoreet nibh non quam vehicula, et tincidunt leo varius.`,
            topic: {
                create: [
                    {
                        name: `Pourquoi les chats retombent toujours sur leurs pattes ?`,
                        post: {
                            create: [
                                {
                                    content: `Je ne sais pas, drole de question :)`,
                                    author: {
                                        create: {
                                            email: `michel@aol.com`,
                                            name: `Michel Zabrouk`,
                                            password: `azerety`,
                                            urlAvatar: `www`,
                                            role: `member`,
                                        },
                                    },
                                },
                                {
                                    content: `Ils sont cons sans doute`,
                                    author: {
                                        create: {
                                            email: `justine@yahoo.com`,
                                            name: `Justine56`,
                                            password: `azerety`,
                                            urlAvatar: `www`,
                                            role: `member`,
                                        },
                                    },
                                },
                                {
                                    content: `Vraiment tu es désagréable`,
                                    author: {
                                        create: {
                                            email: `pascal@yahoo.com`,
                                            name: `Pascal23`,
                                            password: `azerety`,
                                            urlAvatar: `www`,
                                            role: `member`,
                                        },
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
