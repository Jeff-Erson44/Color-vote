import { Admin } from 'mongodb';
import {connectToDatabase} from '../../lib/connection';
import admin from '../../prisma/Admin';

export default async function handler(req, res) {

    if (req.method === 'POST') {
        const { name, password } = req.body;
        if (name && password) {
            try {
            // Hash password to store it in DB
            var passwordhash = await bcrypt.sign(password);
            var admin = new Admin({
                name,
                password,
            });
            // Create new user
            var usercreated = await user.save();
            return res.status(200).send(usercreated);
            } catch (error) {
            return res.status(500).send(error.message);
            }
        } else {
            res.status(422).send('data_incomplete');
        }
    }
  const  mongoClient  = await connectToDatabase();
  const collection = mongoClient.db('colorvote').collection('data');
  const votes ={};
  res.json(votes);
}