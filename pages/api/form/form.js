import {createQuestion,getAllQuestions} from '../../../prisma/question'
import prisma from '../../../prisma/prisma'

export default async function handler(req,res){
    try{
        switch(req.method){
            case 'POST':
                const {question,id_session} = req.body
                if(!question || !id_session){
                    return res.status(400).json({error:'Please add all the fields'})
                }
                if(question.length < 10){
                    return res.status(400).json({error:'Please add at least 10 characters'})
                }
                
                let session = await createQuestion(question,id_session);
                if(session){
                    res.status(200).json({message:"Question created"})
                    await prisma.$disconnect()
                }else{
                    return res.status(401).json({error:'Question already exist'})
                }
                break;
            case 'GET':
                const lst_question = await getAllQuestions();
                console.log(lst_question)
                res.status(200).json({message:"Question pull ok!"})

        }
    }catch(err){
        console.log(err)
        res.status(500).json({message: 'Something went wrong'})
    }
}