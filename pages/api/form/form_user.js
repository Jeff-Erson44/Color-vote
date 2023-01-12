import {getAllSession} from '../../../prisma/session'
import {getAllActivity} from '../../../prisma/activity'
import {getAllGroup} from '../../../prisma/group'
import {createUser} from '../../../prisma/user'
import { ObjectId } from 'mongodb'

export default async function handler(req,res){
    try{
        switch(req.method){
            case 'POST':
                const {firstName,lastName,email,group_name,activity_name} = req.body
                if(!firstName || !lastName || !group_name || !activity_name){
                    return res.status(400).json({error:'Please add all the fields'})
                }
                
                
                const token = (ObjectId().toString())
                let user = await createUser(firstName,lastName,email,activity_name,group_name,token);
                if(user){
                    res.status(200).json({message:"User created"})
                }else{
                    res.status(500).json({message:"erreur creation"})
                }
                break;
            case 'GET':
                const lst_activity = await getAllActivity();
                const lst_group = await getAllGroup();
                const lst_session = await getAllSession();
                res.status(200).json(
                    {
                        "activity": lst_activity,
                        "group": lst_group,
                        "session": lst_session
                    }
                )

        }
    }catch(err){
        console.log(err)
        res.status(500).json({message: 'Something went wrong'})
    }
}