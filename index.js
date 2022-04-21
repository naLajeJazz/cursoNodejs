const express = require('express');  //importa o express
const app = express();  //iniciando o express

//Rotas
//req => dados enviados pelo usuario
//res => resposta que vai ser enviada para o usuario

// rota home
app.get("/",function(req,res) {
res.send("<h1>Ola mundo!!</h1>");  //resposta da rota
});

// rota sobre
app.get("/sobre",function(req,res) {

let dadosQuery= req.query["dadosQuery"]; //usuario passa parametros---> ?dadosQuery=<aqui parametros>
  
dadosQuery?
res.send(`<h1>O usuario passou o sequinte parametro--> ${dadosQuery}`):
res.send("<h1>sobre</h1>");  //resposta da rota
               
});

// rota contato
app.get("/contato",function(req,res) {
res.send("<h1>contato</h1>");  //resposta da rota
});

// rota com parametro
app.get("/oi/:dados?/:dados_2?",function(req,res) {

let nome =req.params.dados;
let empresa =req.params.dados_2;

nome && empresa?
res.send(`<h2>Ola ${nome} da empresa  ${empresa}</h2>`)://resposta da rota é os dados enviados pelo usuario
res.send("<h1>Não passou parametros</h1>");//resposta se usuario não passar parametros
        
});

app.listen(1321,function(erro){

erro ? 
console.log("opa aconteceu um erro!") :
console.log("oba servidor rodando!");

})