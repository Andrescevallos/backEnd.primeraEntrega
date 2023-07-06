import express  from "express";
import  {ProductManager}  from "./PrimeraEntrega.js";

const app = express()
const port = 8080
const productManager = new ProductManager("productos.json");
let productos = [];


app.get("/productos", async (req, res) => {
    const { limit } = req.query;
    try {
      let response = await productManager.getProducts();
      if (limit) {
        let tempArray = response.filter((dat, index) => index < limit);
        res.json({ data: tempArray, limit: limit, quantity: tempArray.length });
      } else {
        res.json({ data: response, limit: false, quantity: response.length });
      }
    } catch (error) {
      console.log(error);
    }
})

app.get("/productos/:pid", async (req, res) => {
    const { pid } = req.params;
  
    let product = await productManager.getProductById(parseInt(pid));
  
    if (product) {
      res.json({ message: "success", data: product });
    } else {
      res.json({
        message: "el producto solicitado no existe",
      });
    }
  });

app.listen(port, () =>{
    console.log("servidor corriendo en el puerto" + port)
})