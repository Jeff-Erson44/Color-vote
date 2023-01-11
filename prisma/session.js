import prisma from './prisma'

export const getSession = async (id)=>{
    const session = await prisma.session.findUnique({
        where:{
            id:id
        }
    })
    return session
}

export const getSessionbyName = async (name)=>{
    const session = await prisma.session.findUnique({
        where:{
            sessionName:name
        }
    })
    return session
}

export const getSessionbyId = async (id)=>{
    const session = await prisma.session.findUnique({
        where:{
            id:id
        }
    })
    return session
}

export const createSession = async (name,totalQuestion,totalUser)=>{
    const session = await prisma.session.create({
        data:{
            sessionName:name,
            totalQuestion:totalQuestion,
            totalUser:totalUser
        }
    })
    return session
}

export const updateSession = async (id,name,totalQuestion,totalUser,countAnswer)=>{
    const session = await prisma.session.update({
        where:{
            id:id
        },
        data:{
            sessionName:name,
            totalQuestion:totalQuestion,
            totalUser:totalUser,
            countAnswer:countAnswer
        }
    })
    return session
}

export const updateSessionCountAnswer = async (id,countAnswer)=>{
    const session = await prisma.session.update({
        where:{
            id:id
        },
        data:{
            countAnswer:countAnswer
        }
    })
    return session
}
    

export const deleteSession = async (id)=>{
    const session = await prisma.session.delete({
        where:{
            id:id
        }
    })
    return session
}
