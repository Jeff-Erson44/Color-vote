import {getAdminbyName,updateAdminToken} from '../../../prisma/admin'
import prisma from '../../../prisma/prisma'
import { ObjectID } from 'bson';

export default async function handler(req,res){
    try{
        switch(req.method){
            case 'POST':
                const {username,password} = req.body
                if(!username || !password){
                    return res.status(400).json({error:'Please add all the fields'})
                }
                let admin = await getAdminbyName(username);
                if(admin){
                    const isValid = (password == admin.password)
                    if (!isValid){
                        return res.status(401).json({error:'Invalid password'})
                    }else{                        
                        res.status(200).json({message:"Admin connecté"})
                        await prisma.$disconnect()
                    }
                }else{
                    return res.status(401).json({error:'Invalid username or password'})
                }

        }
    }catch(err){
        console.log(err)
        res.status(500).json({message: 'Something went wrong'})
    }
}