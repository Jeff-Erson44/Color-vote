import prisma from './prisma'


export const getAdmin = async (id)=>{
    const admin = await prisma.admin.findUnique({
        where:{
            id:id
        }
    })
    return admin
}

export const getAdminbyName = async (name)=>{
    const admin = await prisma.admin.findUnique({
        where:{
            name:name
        }
    })
    return admin
}


export const updateAdminToken = async (id,token)=>{
    const admin = await prisma.admin.update({
        where:{
            id:id
        },
        data:{
            token:token
        }
    })
    return admin
}