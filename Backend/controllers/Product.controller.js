const { Product } = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const AddProduct = async (req, res) => {
    const { file, body } = req;
    const { ProductName, Description, Price, Discount, Category_ID } = body;
    try {
        if (ProductName && Description && Price && file?.path && Category_ID) {
            const ProductImage = await file.path.replace(/\\/g, '/');
            const newProduct = await Product.create({ ProductName, ProductImage, Description, Price, Discount, Category_ID });
            res.status(200).send(newProduct)
        } else {
            res.status(403).send("Data is not enough");
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
const AllProduct = async (req, res) => {
    const { name } = req.query;
    
    try {
        if (name) {
            //   tim kiem theo ten gan dung 
            const lstProduct = await Product.findAll({
                where: {
                    IsActive: true,
                    ProductName: {
                        [Op.like]: `%${name}%`
                        
                    }
                }
            })
            res.status(200).send(lstProduct)
        } else {
            // hthi all sp
            const lstProduct = await Product.findAll({ where: { IsActive: true } });
            res.status(200).send(lstProduct)
        }

    } catch (error) {
        res.status(500).send(error)
    }
}
const DetailProduct = async (req, res) => {
    const { detail } = req;
    try {
        if (detail) {
            res.status(200).send(detail)
        } else {
            res.status(404).send("Product is not exists")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
const DeleteProduct = async (req, res) => {
    const { detail } = req;
    try {
        if (detail) {
            detail.IsActive = false;
            await detail.save();
            res.status(200).send(detail)
        } else {
            res.status(404).send("Delete Fail")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const UpdateProduct = async (req, res) => {
    const { file, body, detail } = req;
    console.log("first", file)
    const { ProductName, Description, Price, Discount, Category_ID } = body;
    try {
        let ProductImage;
        ProductImage = detail.ProductImage;
        if (file) {
            ProductImage = await file.path.replace(/\\/g, '/');
        }
        if (ProductName && Description && Price && Category_ID) {
            detail.ProductName = ProductName;
            detail.Description = Description;
            detail.Price = Price;
            detail.Discount = Discount;
            detail.Category_ID = Category_ID;
            detail.ProductImage = ProductImage;
            await detail.save();
            res.status(200).send(detail)
        } else {
            res.status(403).send("Data is not enough");
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
module.exports = {
    AddProduct,
    AllProduct,
    DetailProduct,
    DeleteProduct,
    UpdateProduct
}