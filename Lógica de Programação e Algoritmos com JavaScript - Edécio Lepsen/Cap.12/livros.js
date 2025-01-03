const express = require("express")
const router = express.Router()
const dbKnex = require("./data/db_config")
const cors = require("cors")

router.use(cors())

// Rota para listar todos os livros (consulta)
router.get("/", async (req, res) => { 
    try {
        const livros = await dbKnex("livros").orderBy("id", "desc")
        res.status(200).json(livros)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
});

// Rota para pesquisar um livro (consulta)
router.get("/:palavra", async (req, res) => {
    const palavra = req.params.palavra
    try {
        const livros = await dbKnex("livros")
            .where("titulo", "like", `%${palavra}%`)
            .orWhere("autor", "like", `%${palavra}%`)
        res.status(200).json(livros)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
});

// Rota para resumo estatístico (consulta)
router.get("/dados/resumo", async (req, res) => {
    try {
        const livros = await dbKnex("livros")
        .count({ num: "*" })
        .sum({ preco: "preco" })
        .max({ preco: "preco" })
        .avg({ preco: "preco" })
        const { num, soma, maior, media } = livros[0]
        res.status(200).json({ num, soma, maior, media: Number(media.toFixed(2)) })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
});

//Rota soma de preços, agrupados por ano
router.get("/dados/grafico", async (req, res) => {
    try {
        const totalPorAno = await dbKnex("livros").select("ano")
        .sum({ total: "preco" })
        .groupBy("ano")
        res.status(200).json(totalPorAno)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
});

//Rota para cadastrar um livro (criação)
router.post("/", async (req, res) => {
    const { titulo, autor, ano, preco, foto } = req.body

    if (!titulo || !autor || !ano || !preco || !foto) {
        res.status(400).json({ msg: "Todos os campos devem ser preenchidos" })
        return
    }

    try {
        const novo = await dbKnex("livros").insert({ titulo, autor, ano, preco, foto })
        res.status(201).json(novo)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
});

//Rota para alterar um livro (atualização)
router.put("/:id", async (req, res) => {
    const { id } = req.params
    const { preco } = req.body

    try {
        await dbknex("livros").update({ preco }).where({ id })
        res.status(204).json()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
});

//Rota para excluir um livro (deletar)
router.delete("/:id", async (req, res) => {
    const { id } = req.params

    try {
        await dbknex("livros").del().where({ id })
        res.status(200).json()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
});

module.exports = router;
