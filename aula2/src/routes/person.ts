import express, { Request, response, Response, Router } from 'express';

const router: Router = express.Router();
const people: object[] = [];


router
    .post('/register', (req: Request, res: Response) => {
        const { nome, sobrenome } = req.body
        people.push({nome,sobrenome})
         res.status(200).send({message: `Pessoa ${nome} ${sobrenome} recebida com sucesso!`});
        console.log(nome, sobrenome)
    })

    .get('/usuarios', (req: Request, res: Response) => {
        res.status(200).send({users: people})
    })

    .get('/usuarios/:id', (req: Request, res: Response) => {
        const { id } = req.params
        let convertedId = Number(id)
        res.status(200).send({ response : people[convertedId]})   
    })
    .get('/filtro', (req: Request, res: Response) => {
        const { nome, sobrenome } = req.query
        res.status(200).send({response: nome, sobrenome});
    })
    .put('/usuarios/:id', (req: Request, res: Response) => {
        const { id } = req.params;
        const { nome, sobrenome } = req.body;

        res.status(200).send(`Pessoa com o id: ${id} foi atualizado para
        ${nome} ${sobrenome}`)
    })

export default router;