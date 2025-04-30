// apis proximamente...

const {express} = require("express");
const app = express();

BASE_URL = "URL de la API";

fetch(`${BASE_URL}/endpoint`)
.then(response => response.json())
  try{
    const data = response.json();
    console.log(data);
  }catch(error){
    console.log("Ha ocurrido un error")
  }

app.get("/", req, res)[
  res.send("Hola Mundo")
]

export default app;