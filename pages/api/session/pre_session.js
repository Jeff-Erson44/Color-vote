import {getSession} from '../../../prisma/session';

export default async function handler(req,res){
    try{
        switch(req.method){
            case 'POST':
                const {id_session} = req.body
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