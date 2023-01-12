import prisma from './prisma'

export const getHistory = async (id,question_id,session_id) => {
    const history = await prisma.history.findMany({
        where:{
            history_id:id,
            question_id:question_id,
            session_id:session_id
        }
    })
    return history
}

export const createHistory = async (answer,user_id,question,session) => {
    const history = await prisma.history.create({
        data: {

            answer:answer,
            history:{
                connect:{
                    id:user_id
                }
            },
            
            question:{
                connect:{
                    id_question:question
                }
            },
            session:{
                connect:{
                    id:session
                }
            },
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