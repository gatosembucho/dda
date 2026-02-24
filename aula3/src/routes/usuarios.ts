import express, { Request, Response, Router } from 'express';

interface User {
    id: number;
    nome: string;
    email: string;
    tipo: "aluno" | "professor" | "coordenador";
    ativo: boolean;
    createdAt: Date;
}

const router: Router = express.Router();
const users: User[] = [];

router
    .post('/', (req: Request, res: Response) => {
        const { nome, email, tipo } = req.body

        if (!nome || !email || !tipo) {
            return res.status(400).send({ response: 'Campos obrigatórios: nome, email ou tipo.' });
        }

        let id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
        const user = users.some(user => user.email === email || user.id === id);

        if (user) {
            return res.status(400).send({ response: 'O id de usuário ou email já está cadastrado.' });
        }

        users.push({
            id,
            nome,
            email,
            tipo,
            ativo: true,
            createdAt: new Date()
        })

        res.status(201).send({ response: `${nome} cadastrado(a) com sucesso!` });
    })
    .get('/', (req: Request, res: Response) => {
        res.status(200).send({ response: users })
    })
    .get('/:id', (req: Request, res: Response) => {
        const { id } = req.params
        let convertedId = Number(id)
        const user = users.find(user => user.id === convertedId);

        if (!user) {
            return res.status(404).send({ response: 'Usuário não encontrado.' });
        } else {
            res.status(200).send({ response: user });
        }
    })
    .put('/:id', (req: Request, res: Response) => {
        const { id } = req.params;
        const { nome, email, tipo, ativo } = req.body;

        if (!nome || !email || !tipo) {
            return res.status(400).send({ response: 'Campos obrigatórios: nome, email ou tipo.' });
        }

        let convertedId = Number(id)
        const user = users.find(user => user.id === convertedId);

        if (!user) {
            return res.status(404).send({ response: `Usuário com id ${id} não encontrado.` });
        }

        if (email && users.some(user => user.email === email)) {
            return res.status(400).send({ response: 'O email já está cadastrado.' });
        }

        user.nome = nome;
        user.email = email;
        user.tipo = tipo;
        if (ativo !== undefined) user.ativo = ativo;

        res.status(200).send({ response: `Usuário ${nome} atualizado com sucesso.` })

    })
    .patch('/:id', (req: Request, res: Response) => {
        const { id } = req.params;
        const { nome, email, tipo, ativo } = req.body;

        let convertedId = Number(id)
        const user = users.find(user => user.id === convertedId);

        if (!user) {
            return res.status(404).send({ response: `Usuário com id ${id} não encontrado.` });
        }

        if (email && users.some(user => user.email === email)) {
            return res.status(400).send({ response: 'O email já está cadastrado.' });
        }

        if (nome) user.nome = nome;
        if (email) user.email = email;
        if (tipo) user.tipo = tipo;
        if (ativo !== undefined) user.ativo = ativo;

        res.status(200).send({ response: 'Usuário atualizado com sucesso.' })
    })
    .delete('/:id', (req: Request, res: Response) => {
        const { id } = req.params;
        let convertedId = Number(id)

        const userIndex = users.findIndex(user => user.id === convertedId);
        const user = users[userIndex];

        if (!user) {
            return res.status(404).send({ response: 'Usuário  não encontrado.' });
        }

        users.splice(userIndex, 1);

        res.status(200).send(`Usuário ${user.nome} foi deletado.`)
    });

export default router;