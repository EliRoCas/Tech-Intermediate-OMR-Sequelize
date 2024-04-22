const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("ormtest", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
})


class Product extends Model { };

Product.init({
    product_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false
    },
    is_stokc: {
        type: DataTypes.BOOLEAN,
    }
}, {
    sequelize,
    modelName: "Product",
}
);

module.exports = Product;

// // Método para testear si la base de datos está correctamente conectada y funcionando
// async function testConnection() {
//     try {
//         await sequelize.authenticate();
//         console.log("Todo está funcionando bien.")
//     } catch (err) {
//         console.log(err)("Algo salió mal", err)
//     }

// }

// testConnection();