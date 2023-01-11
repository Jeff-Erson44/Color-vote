import prisma from './prisma'

export const getAllActivity = async () => {

  const activitys = await prisma.activity.findMany({})
  return activitys
}

export const getActivity = async (id) => {
  const getActivity = await prisma.activity.findUnique({
    where: {
      id: id
    }
  })
  return getActivity
}

export const createActivity = async (name) => {
  const activity = await prisma.activity.create({
    data: {
      activityName:name
    }
  })
  return activity
}

export const updateActivity = async (id, name) => {
  const activity = await prisma.activity.update({
    where: {
      id: id
    },
    data: {
      activityName:name
    }
  })
  return activity
}

export const deleteActivity = async (id) => {
  const activity = await prisma.activity.delete({
    where: {
      id: id
    }
  })
  return activity
}

