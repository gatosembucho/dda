import express, { Request, Response, Router } from 'express';
import Person from '../models/person.ts';
const router: Router = express.Router();

router
    .post('/register', async (req: Request, res: Response) => {
    const { name, age } = req.body;

    try {
    const person = new Person({ name, age });
    await person.save();
    res.status(201).json(person);
    }
    catch (error)
    {
    res.status(400).json({ message: 'Erro ao criar pessoa', error });
    }
    });

   
export default router;