
import prisma from '@/lib/prisma'

export async function DELETE(req:Request,{params}) {
    // const {id} = await req.json();
    const id = parseInt(params.id)
    try {
        const user = await prisma.user.delete({
            where:{
                id 
            }
        })
        return Response.json({message:'oke',user})
    } catch (error) {
        return Response.json({
            message:'Error',            
        })
    }
}

export async function PUT(req:Request,{params} ) {
    const id = parseInt(params.id)
    const {name,email} = await req.json();
    try {
        const user = await prisma.user.update({
            where:{
                id
            },
            data:{
                name,
                email
            }
        })
        return Response.json({message:'oke',user})
    } catch (error) {
        return Response.json({
            message:'Error',            
        })
    }
}
