import {getSession} from '../../../prisma/session';

export default async function handler(req,res){
    try{
        switch(req.method){
            case 'POST':
                const {id,num} = req.body
                if(!id){
                    return res.status(400).json({error:'Please add all the fields'})
                }
                let curr_session = await getSession(id);
                if(curr_session){
                    if(num > curr_session.totalQuestion){
                        res.status(200).json(
                            {
                                "session": curr_session,
                                "name": curr_session.name,
                                "nb_page": curr_session.totalQuestion,
                            }
                        )
                    }else{
                        res.status(200).json(
                            {
                                "session": curr_session,
                                "name": curr_session.name,
                                "nb_page": curr_session.totalQuestion,
                                "num_page": num+1,
                            }
                        )
                    }
                    
                }else{
                    return res.status(401).json({error:'no session!'})
                }

                break;
            case 'GET':
                const {id_session,num_page} = req.body
                if(!id_session){
                    return res.status(400).json({error:'Please add all the fields'})
                }

                let session = await getSession(id_session);
                if(session){
                    
                    res.status(200).json(
                        {
                            "session": session,
                            "name": session.name,
                            "nb_page": session.totalQuestion,
                            "num_page": num_page,
                        }
                    )
                }else{
                    return res.status(401).json({error:'no session!'})
                }

        }
    }catch(err){
        console.log(err)
        res.status(500).json({message: 'Something went wrong'})
    }
}