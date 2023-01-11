import prisma from './prisma'

export const getAllGroup = async () => {
      const answers = await prisma.group.findMany({})
      return answers
}

export const getGroupById = async (id) => {
    const answer = await prisma.group.findUnique({
        where: {
        id: id
        }
    })
    return answer
}


export const getGroupByName = async (name) => {
    const answer = await prisma.group.findUnique({
        where: {
        groupName: name
        }
    })
    return answer
}

export const createGroup = async (name) => {
    const answer = await prisma.group.create({
        data: {
        groupName:name
        }
    })
    return answer
}

export const updateGroupName = async (id, name) => {
    const answer = await prisma.group.update({
        where: {
        id: id
        },
        data: {
        groupName:name
        }
    })
    return answer
}

export const deleteGroup = async (id) => {
    const answer = await prisma.group.delete({
        where: {
        id: id
        }
    })
    return answer
}



