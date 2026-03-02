import {Request, Response} from "express"
import Person from "../models/person"


class PersonControler {
    static async getUsers(req: Request, res: Response){
        const users = await Person.find()
        return res.status(200).send({response: users})
    }

    static async createUser(req: Request, res: Response) {
        const { name, age } =  req.body;

        try {
        const person = new Person({ name, age });
        await person.save();
            return res.status(201).json(person);
        } catch (error) {
            return res.status(400).json({ message: 'Erro ao criar pessoa', error });
        }
    }

    static async updateUser(req: Request, res: Response){
        const { id } = req.params;
        const { name, age } = req.body;

        try {
        const person = await Person.findByIdAndUpdate(id, { name, age }, { new: true });
        if (!person) {

        return res.status(404).json({ message: 'Pessoa não encontrada' });
        }
        return res.status(200).json(person);
        } catch (error) {
        return res.status(400).json({ message: 'Erro ao atualizar pessoa', error });
        }
    }

    static async DeleteUser(req: Request, res: Response){
    const { id } = req.params;

    try {
        const person = await Person.findByIdAndDelete(id);
    if (!person) {
    return res.status(404).json({ message: 'Pessoa não encontrada' });
    }
    return res.status(200).json({ message: 'Pessoa deletada com sucesso' });
    } catch (error) {
    return res.status(400).json({ message: 'Erro ao deletar pessoa', error });
    };
    }
    
}

export default PersonControler