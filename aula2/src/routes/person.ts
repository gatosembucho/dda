import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();
const people: object[] = [];


router
    .post('/register', (req: Request, res: Response) => {
        const { nome, sobrenome } = req.body
        people.push({nome,sobrenome})
         res.status(200).send({message: `Pessoa ${nome} ${sobrenome} recebida com sucesso!`});
        console.log(nome, sobrenome)
    })

    .get('/', () => {
        console.log("teste")
    })
//....

export default router;