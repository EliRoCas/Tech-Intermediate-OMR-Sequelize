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


// Método para agregar productos utilizando faker 
// router.post("/products", async (req, res) => {
//         await Products.sync();
//     const createProduct = await Products.create({
//         product_name: faker.commerce.product(),
//         price: faker.commerce.price(),
//         is_stock: faker.datatype.boolean()
//     })
//     res.status(201).json({
//         ok: true,
//         status: 201,
//         message: "Producto Creado con éxito."
//     })
// })

// Método para agregar productos utilizando JSON  
router.post("/products", async (req, res) => {
    const dataProducts = req.body
    await Products.sync();
    const createProduct = await Products.create({
        product_name: dataProducts.product_name,
        price: dataProducts.price,
        is_stock: dataProducts.is_stock
    })
    res.status(201).json({
        ok: true,
        status: 201,
        message: "Producto Creado con éxito."
    })
})


// Método para editar los productos 
// Put nos da una actualización completa del elemento, todo lo que sea manejable por el usuario
router.put("/products/:product_id", async (req, res) => {
    const id = req.params.product_id;
    const dataProducts = req.body;
    const updateProduct = await Products.update(
        {
            product_name: dataProducts.product_name,
            price: dataProducts.price,
            is_stock: dataProducts.is_stock,
        }, {
        where: {
            product_id: id,
        }
    }
    );
    res.status(200).json({
        ok: true,
        status: 200,
        body: updateProduct
    })

})


// Método para eliminar un producto 
router.delete("/products/:product_id", async (req, res) => {
    const id = req.params.product_id;
    const deleteProduct = await Products.destroy({
        where: {
            product_id: id,
        }
    });
    // Con código de error que no envía el json
    // res.status(204).json({
    //     ok: true,
    //     status: 204,
    //     body: deleteProduct
    // })
    res.status(200).json({
        ok: true,
        status: 204,
        body: deleteProduct
    })
})


module.exports = router; 