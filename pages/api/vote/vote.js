import { createHistory, getHistory } from '../../../prisma/history';
import {getSessionQuestion} from '../../../prisma/session';
import prisma from '../../../prisma/prisma'

export default async function handler(req,res){
    try{
        switch(req.method){
            case 'POST':
                const {id_question,answer,user_id,session_id} = req.body
                if(!id_question || !user_id || !session_id){
                    return res.status(400).json({error:'Please add all the fields'})
                }
                
                let answer_user = getHistory(user_id,id_question,session_id);
                if(answer_user){
                    let update = await updateHistory(answer_user.id,answer)
                    res.status(200).json({message:"Answer modified"})
                    await prisma.$disconnect()
                }else if(answer_user = await createHistory(answer,user_id,id_question,session_id)){
                    res.status(200).json({message:"Answer created"})
                    await prisma.$disconnect()
                }else{
                    return res.status(401).json({error:'Answer already exist'})
                }

                break;
            case 'GET':
                const {question_number,id_session} = req.body
                const questions_session = await getSessionQuestion(id_session);
                if(!questions_session){
                    return res.status(400).json({error:'Question not found'})
                }else{
                    res.status(200).json({ 
                        "question": questions_session.question[question_number],
                        "page": question_number,
                        "nb_question": questions_session.question.length
                    })
                }
        }
    }catch(err){
        console.log(err)
        res.status(500).json({message: 'Something went wrong'})
    }
}