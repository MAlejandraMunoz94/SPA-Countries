const server = require("./src/server");
const { conn} = require('./src/db.js');
const cargueInicial = require("./cargueInicial")
require("dotenv").config();

const PORT = 3001;

conn
  .sync({ force: true})
  .then(async() => {
      // Llama a la función cargueInicial
      await cargueInicial();
    // Inicia el servidor
    server.listen(PORT,  () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error.message));
