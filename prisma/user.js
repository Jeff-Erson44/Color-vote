import prisma from './prisma'

export const getAllUsers = async () => {
    const users = await prisma.user.findMany({})
    return users
}

export const getUserById = async (id) => {
    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    })
    return user
}


export const getUserbyFirstNameLastName= async (firstName,lastName) => {
    const user = await prisma.user.findUnique({
        where: {
            firstName: firstName,
            lastName:lastName
        }
    })
    return user
}

export const createUser = async (firstName, lastName, email,activity,group) => {
    const user = await prisma.user.create({
        data: {
            firstName:firstName,
            lastName:lastName,
            email:email,
            activity_id:activity,
            activity:activity,
            group_user:group,
            group:group
        }
    })
    return user
}

export const updateUser = async (id, firstName, lastName, email,activity,group) => {
    const user = await prisma.user.update({
        where: {
            id: id
        },
        data: {
            firstName:firstName,
            lastName:lastName,
            email:email,
            activity_id:activity,
            activity:activity,
            group_user:group,
            group:group
        }
    })
    return user
}


export const updateUserName = async (id, firstName, lastName) => {
    const user = await prisma.user.update({
        where: {
            id: id
        },
        data: {
            firstName:firstName,
            lastName:lastName,
        }
    })
    return user
}

export const updateUserEmail = async (id, email) => {
    const user = await prisma.user.update({
        where: {
            id: id
        },
        data: {
            email:email,
        }
    })
    return user
}

export const updateUserActivity = async (id, activity) => {
    const user = await prisma.user.update({
        where: {
            id: id
        },
        data: {
            activity_user:activity,
            activity:activity,
        }
    })
    return user
}



export const updateUserGroup = async (id, group) => {
    const user = await prisma.user.update({
        where: {
            id: id
        },
        data: {
            group_user:group,
            group:group,
        }
    })
    return user
}


export const deleteUser = async (id) => {
    const user = await prisma.user.delete({
        where: {
            id: id
        }
    })
    return user
}

export const updateUserTok = async (id, token) => {
    const user = await prisma.user.update({
        where: {
            id: id
        },
        data:{
            token:token
        }
    })
    return user
}