const app = require("./server")
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})