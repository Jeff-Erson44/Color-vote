import prisma from './prisma'

export const getAllQuestions = async () => {
    const questions = await prisma.question.findMany({})
    return questions
}

export const getQuestion = async (id) => {
    const question = await prisma.question.findUnique({
        where: {
            id: id
        }
    })
    return question
}

export const createQuestion = async (question) => {
    const newQuestion = await prisma.question.create({
        data: {
            question: question
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

