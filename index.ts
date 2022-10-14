import { PrismaClient } from './generated/client/deno/edge.ts'

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  })
  
async function main() {
    const users = await prisma.user.findMany()
    console.log({ users })
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