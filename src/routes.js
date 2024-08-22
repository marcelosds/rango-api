import { Router } from "express";

const router = Router();

//GET: http://localhost:3001/usuarios/login?email=teste@teste.com&senha=123

router.post("/usuarios/login", (req, res) => {

    //const email = "marcelosds@gmail.com";
    //const senha = "123456";
    const { email, senha } = req.body;

    if (email == "marcelosds@gmail.com" && senha == "123456") {
        res.status(200).json({
            id_usuario: 1,
            email: "marcelosds@gmail.com",
            nome: "Marcelo Souza dos Santos",
            instagram: "@gestor_ti.marcelo"
        });
    } else {
        res.status(401).json({ error: "E-mail ou senha inválida" });
    }

});

// GET = Listar dados
// POST = Inserir os dados no servidor
// PUT = Editar dados no servidor
// DELETE = Excluir dados no servidor

router.post("/usuarios", (req, res) => {

    const { nome, email, senha, numero, cep } = req.body;

    res.status(201).json({
        id_usuario: 1,
        nome,
        email,
        senha,
        cep,
        numero
    });
});

router.get("/restaurantes", (req, res) => {

    // URI Params: http://localhost:3001/restaurantes/10
    // Query params: http://localhost:3001/restaurantes?busca=Pizza (somente GET)
    const busca = req.query.busca;

    res.json([
        { restaurante: 1, nome: "Burger King" },
        { restaurante: 2, nome: "Mc Donalds" }
    ]);

});

router.get("/categorias", (req, res) => {

    // Query params: http://localhost:3001/categorias

    res.json([
        { id_categoria: 1, categoria: "Xis Burguer" },
        { id_categoria: 2, categoria: "Pizzas" },
        { id_categoria: 3, categoria: "Fritas" }
    ]);

});

export default router;