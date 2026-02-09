import express from 'express'
import routes from './routes/routes.ts'

const port = 8080
const app = express()

app.get('/', (req, res) =>{
    res.status(200).send({ response: "Api funcionando"})
})

routes(app)
// app.get('/objeto', )

// const pessoa = {
//     name: "Malu",
//     lastname: "Luiza"
// }

app.listen(port, () =>
{
    console.log(`Servidor na porta ${port}`)
})