const Product = require('../models/product')

const createProduct = (req) => {
    const { name, price, quantity, description } = req.body;
    const newProduct = new Product({
        name,
        price,
        quantity,
        description
    });
    newProduct = save((err, product) => {
        if (err) {
            return res.status(400).send({ messagge: "Error al crear el producto" });
        }
        return res.status(200).send({product});
    });
}

module.export = {
    createProduct
}

// const {createProduct} = require('../controllers/productController')
// La linea anterior muestra como se podria importar la funcion crear producto
