import { getActivity,getAllActivity } from "../../prisma/activity"

export default async function handler(req,res){
  try{
    switch(req.method){
      case 'GET':
        if(req.query.id){
          const user = await getActivity(req.query.id)
          res.status(200).json(user)
        }else{
          const users = await getAllActivity()
          res.status(200).json(users)
        }
        break
    }
  }catch(err){
    console.log(err)
    res.status(500).json({message: 'Something went wrong'})
  }
}

