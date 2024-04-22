const router = require("express").Router();

const { faker } = require("@faker-js/faker");

const Products = require("../model/product.model")

// Método para traer todos los productos 
router.get("/products", async (req, res) => {
    const products = await Products.findAll();
    res.status(200).json({
        ok: true,
        status: 200,
        body: products
    })
})

// Método para llamar un único producto 
router.get("/products/:product_id", async (req, res) => {
    const id = req.params.product_id;
    const product = await Products.findOne({
        where: {
            product_id: id,
        }
    });
    res.status(200).json({
        ok: true,
        status: 200,
        body: product
    })
})


// Método para agregar productos 
router.post("/products", async (req, res) => {
    await Products.sync();
    const createProduct = await Products.create({
        product_name: faker.commerce.product(),
        price: faker.commerce.price(),
        is_stock: faker.datatype.boolean()
    })
    res.status(201).json({
        ok: true,
        status: 201,
        message: "Producto Creado con éxito."
    })
})

// Método para editar los productos 
router.put("/products", (req, res) => {
    res.send("Soy un Touter");
})

// Método para eliminar un producto 
router.delete("/products", (req, res) => {
    res.send("Soy un Touter");
})


module.exports = router; 