
import { NextRequest } from "next/server";
import prisma from '@/lib/prisma'


export async function GET() {
//   console.log(reqn.nextUrl.search.slice(4));
  const users =  await prisma.user.findMany()
  return Response.json({ message: "ok" ,users});
}

export async function POST(req:Request) {
    const {name,email} = await req.json();
    try {
        const user = await prisma.user.create({
            data: {
                name,
                email
            },
        })
        return Response.json({message:'oke',user})
    } catch (error) {
        return Response.json({
            message:'Error',            
        })
    }
}


