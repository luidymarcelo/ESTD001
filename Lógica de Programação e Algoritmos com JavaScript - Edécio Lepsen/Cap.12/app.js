const express = require("express")
const app = express()
const port = 3001

const log = (req, res, next) => {
    console.log(`................. Acessado em ${new Date()}`)
    next()
}

app.get("/", (req, res) => {
    res.send("Foi alterado algo?")
})

app.use(express.json())

app.post('/filmes', log, (req, res) => {
    //const titulo = req.body.titulo
    //const genero = req.body.genero

    const { titulo, genero } = req.body

    res.send(`Filme: ${titulo} - Gênero: ${genero}, recebido...`)
})

app.listen(port, () => {
    console.log("Servidor rodando na porta " + port)
})

/*const log = (req, res, next) => {
    console.log(`................. Acessado em ${new Date()}`)
    next()
}*/

app.get('/transfere', log, (req, res) => {
    res.send("Transfere")
})

app.get('/teste', log, (req, res) => {
    res.send("Teste")
})