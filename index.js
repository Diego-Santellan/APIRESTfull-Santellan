const express = require("express");

const products = require('./routes/products/products')

const app = express();


//deben seguir este orden
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', products);
 




const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Listening app port ${server.address().port}`);
    server.on('error', (error) => console.log(`Error en servidor ${error}`));
})

server.on('error', (error) =>{
    console.log('Error ===>', error);
});