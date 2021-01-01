const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 3000

let persons = [{
  id: 0,
  nome: "PrimeiraPessoa",
  idade: 20
}]

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})