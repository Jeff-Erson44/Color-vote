import prisma from './prisma'

export const getAllQuestions = async (id_session) => {
    const questions = await prisma.question.findMany({
        where:{
            sessionId:id_session
        }
    })
    return questions
}

export const getQuestion = async (id) => {
    const question = await prisma.question.findUnique({
        where: {
            id_question: id
        }
    })
    return question
}


export const createQuestion = async (question,token_session) => {
    const newQuestion = await prisma.question.create({
        data: {
            questionName: question,
            session:{
                connect:{
                    token:token_session
                }
            },

        }
    })
    return newQuestion
}

export const updateQuestion = async (id, question) => {
    const updatedQuestion = await prisma.question.update({
        where: {
            id: id
        },
        data: {
            question: question
        }
    })
    return updatedQuestion
}

export const deleteQuestion = async (id) => {
    const deletedQuestion = await prisma.question.delete({
        where: {
            id: id
        }
    })
    return deletedQuestion
}

