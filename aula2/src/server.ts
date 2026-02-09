import express from 'express'

const port = 8080
const app = express()

app.get('/', (req, res) =>{
    res.send({ pessoa: pessoa})
})

const pessoa = {
    name: "Malu",
    lastname: "Luiza"
}

app.listen(port, () =>
{
    console.log(`Servidor na porta ${port}`)
})