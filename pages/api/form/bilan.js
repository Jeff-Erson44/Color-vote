import {getSessionQuestion,updateSessionStatus} from '../../../prisma/session'
import prisma from '../../../prisma/prisma'

export default async function handler(req,res){
    try{
        switch(req.method){
            case 'GET':
                const {id_session} = req.body
                if(!id_session){
                    return res.status(400).json({error:'Please add all the fields'})
                }
                
                let question = await getSessionQuestion(id_session);
                if(question){
                    res.status(200).json(question)
                    await prisma.$disconnect()
                }else{
                    return res.status(401).json({error:'no question!'})
                }
                break;
            case 'POST':
                const {bool_start,session_id} = req.body
                let session = await updateSessionStatus(session_id,bool_start);
                if(session){
                    res.status(200).json({message:"Session start"})
                }else{
                    return res.status(401).json({error:'Session error'})
                }
        }
    }catch(err){
        console.log(err)
        res.status(500).json({message: 'Something went wrong'})
    }
}