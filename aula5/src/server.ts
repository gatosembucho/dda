import express from 'express';
import routes from "./routes/routes.ts"
import connectDB from './database/database.ts';

const app = express();
const port = 8080;

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));

app.get('/', (req, res) =>{
    res.status(200).send({ response: "Api funcionando"})
})

connectDB();
new routes(app)

app.listen(port, () =>
{
    console.log(`Servidor na porta ${port}`)
})