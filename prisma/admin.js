import prisma from './prisma'


export const getAdmin = async (id)=>{
    const admin = await prisma.admin.findUnique({
        where:{
            id:id
        }
    })
    return admin
}