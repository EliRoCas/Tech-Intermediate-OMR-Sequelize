const app = require("./app/app");


// Este port puede recibir dos valores, proccess.env.PORT o valor por default 
// proccess.env permite acceder a las variables de entorno del sistema, en este caso, PORT 
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`------ Servidor corriendo en el servidor ${port}`)
}); 