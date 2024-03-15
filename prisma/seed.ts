import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // const user = await prisma.user.create({
    //     data:{
    //         name: 'John',
    //         email: 'john@mail',

    //     }
    // })
    // console.log(user);

    // const user = await prisma.user.findMany()
    
    // const article = await prisma.article.create({
    //     data:{
    //         title : 'John Firts',
    //         body:'This is John',
    //         author:{
    //             connect:{
    //                 id:1
    //             }
    //         }
    //     }
    // })

    // const article = await prisma.article.findMany()
    

    // create user and article
    // const user = await prisma.user.create({
    //     data: {
    //         name : 'John Cena',
    //         email: 'johncena@mail',
    //         articles: {
    //             create: {
    //                 title : 'John Cena First',
    //                 body: 'This is John Cena'
    //             }
    //         }
    //     }
    // })
    
    // const user = await prisma.user.update({
    //     where:{
    //         id: 1
    //     },
    //     data:{
    //         name: 'Will Smith'
    //     }
    // })

    // const article = await prisma.article.delete({
    //     where:{
    //         id:2
    //     }
    // })

    
}

main()
  .then(async () => {
    await prisma.$disconnect;
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect;
    process.exit(1)
  });
