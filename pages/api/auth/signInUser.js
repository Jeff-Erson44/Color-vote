import { getUserbyFirstNameLastName} from '../../../prisma/user';
import { getSessionGroup } from '../../../prisma/session';
import prisma from '../../../prisma/prisma'

export default async function handler(req,res){
    try{
        switch(req.method){
            case 'POST':
                const {firstName,lastName,code} = req.body
                console.log(firstName,lastName,code)
                if(!firstName || !lastName || !code){
                    return res.status(400).json({error:'Please add all the fields'})
                }
                let user = await getUserbyFirstNameLastName(firstName,lastName);
                if(user){
                    let groupSession = await getSessionGroup(code)
                    if(groupSession.group.groupName == user[0].group_user){
                        res.status(200).json({message:"User connecté"})
                        await prisma.$disconnect()
                    }else{
                        return res.status(401).json({error:'Invalid code'})
                    }
                }
        }
    }catch(err){
        console.log(err)
        res.status(500).json({message: 'Something went wrong'})
    }
}