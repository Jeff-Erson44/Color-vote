import prisma from './prisma'

export const getHistory = async (id) => {
    const history = await prisma.history.findMany({
        where:{
            user_id:id
        }
    })
    return history
}

export const createHistory = async (answer,history,question,session) => {
    const history = await prisma.history.create({
        data: {
            answer:answer,
            history:history,
            history_id:history,
            question:question,
            question_id:question,
            session:session,
            session_id:session,
        }
    })
    return history
}

export const updateHistory = async (id,answer) => {
    const history = await prisma.history.update({
        where: {
            id: id
        },
        data: {
            answer:answer
        }
    })
    return history
}

export const deleteHistory = async (id) => {
    const history = await prisma.history.delete({
        where: {
            id: id
        }
    })
    return history
}