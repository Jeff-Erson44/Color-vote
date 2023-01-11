import {PrismaClient} from '@prisma/client'

let prisma

if ( process.env.MONGODB_URI === 'production'){
    prisma =  new PrismaClient()
} else{
    if(!global.prisma){
        global.prisma = new PrismaClient()
    }
    prisma = global.prisma
}
console.log("connected to database")
export default prisma