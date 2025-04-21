const {express} = require("express");
const app = express();

// apis publicas proximamente...
fetch()
.then(response => response.json())
  try{
    const data = response.json();
    console.log(data);
  }catch(error){
    console.log("Ha ocurrido un error")
  }

app.get("/") 