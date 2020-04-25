const Postagem = sequelize.define('postagens', {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
});

Postagem.create({
  titulo: "Hello World",
  conteudo: "Node Hello World"
});

const Usuario = sequelize.define('usuarios', {
  nome: {
    type: Sequelize.STRING
  },
  sobrenome: {
    type: Sequelize.STRING
  },
  idade: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  }
});

Usuario.create({
  nome: "Wesley",
  sobrenome: "Ramos",
  idade: 14,
  email: "Wesley@tech.me"
});



// THEN E CATCH TESTE

sequelize.authenticate().then(function() {
  console.log("Conectado com sucesso");
}).catch(function(erro) {
  console.log("Falha ao se conectar: "+erro);
});

// ROTAS: TESTES

app.get("/", function(req, res) {
  res.sendFile(__dirname+"/views/index.html");
});

app.get("/sobre", function(req, res) {
  res.sendFile(__dirname+"/views/sobre.html");
});

app.get("/contato", function(req, res) {
  res.send("Bem vindo ao contato");
});

app.get("/ola/:cargo/:nome", function(req, res) {
  res.send(`Ola ${req.params.nome}, Cargo: ${req.params.cargo}`);
});