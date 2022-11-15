import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data: {
            name: 'John Doe',
            email: 'john.doe@gmail.com',
            avatarUrl: 'https://github.com/eughenio.png',
        }
    })

    const pool = await prisma.pool.create({
        data:{
            title: 'Bolão Eughenio',
            code: 'Eugh12',
            userId: user.id,
            participants:{
                create:{
                    userId: user.id
                }
            }
        }
    })

    await prisma.game.create({
        data: {
            date: '2022-11-14T18:00:00.586Z',
            firstTeamCountryCode: 'DE',
            secondTeamCountryCode: 'BR'
        }
    })

    await prisma.game.create({
        data: {
            date: '2022-11-15T18:00:00.586Z',
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode: 'AR',

            guesses:{
                create: {
                    firstTeamPoints: 2,
                    secondTeamPoints: 0,

                    participant:{
                        connect:{
                            userId_poolId:{
                                userId: user.id,
                                poolId: pool.id,
                            }
                        }
                    }
                }
            }
        }
    })
}

main()