import express from 'express'

const port = 8080
const app = express()

app.get('/', (req, res) =>{
    res.status(200).send({ response: "Api funcionando"})
})

// app.get('/objeto', )

// const pessoa = {
//     name: "Malu",
//     lastname: "Luiza"
// }

app.listen(port, () =>
{
    console.log(`Servidor na porta ${port}`)
})