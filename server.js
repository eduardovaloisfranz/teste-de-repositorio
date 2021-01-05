const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


let persons = [{
  id: 0,
  nome: "PrimeiraPessoa",
  idade: 20
}]
const teste = "API"
const teste2 = "Teste"
const teste3 = "TesteNovo19"

app.get('/', (req, res) => {
  if(persons){
    res.status(200)
    res.send(persons)
  }else {
    res.status(404)
    res.send("Não existem pessoas")
  } 
})

app.post("/add", (req, res) => {
  let personToAdd = req.body;
  personToAdd.id = persons[persons.length - 1].id + 1;
  if(personToAdd){
    persons.push(personToAdd)
    res.status(201)
    res.send(personToAdd)
  }else {
    res.status(500)
    res.send("Erro when trying to add the person")
  }
})

app.get("/ola", (req, res) => {
  res.status(200)
  res.send({
    mensagem: 'Ola Mundo'
  })
})

module.exports = app;
