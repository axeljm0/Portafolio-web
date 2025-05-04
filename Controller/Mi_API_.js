// apis proximamente...

const e = require("express");
const app = express();

BASE_URL = "URL de la API";

fetch(`${BASE_URL}/endpoint`)
.then(response => response.json())
.catch(error => {
    console.error('Error:', e);
  });

