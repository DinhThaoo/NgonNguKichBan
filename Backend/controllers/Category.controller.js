const { Category } = require('../models')

const AddCategory = async (req, res) => {
    const { CategoryName } = req.body;
    try {
        const checkCategoryName = await Category.findOne({ where: { CategoryName } });
        if (!checkCategoryName) {
            if (CategoryName) {
                const newCategory = await Category.create({ CategoryName })
                res.status(201).send(newCategory)
            } else {
                res.status(403).send("Data is not enough")
            }
        }
        else {
            res.status(403).send("CategoryName is exists")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
const AllCategory = async (req, res) => {
    try {
        const listCategory = await Category.findAll({ where: { IsActive: true } })
        res.status(200).send(listCategory)
    } catch (error) {
        res.status(500).send(error)
    }
}
const DetailCategory = async (req, res) => {
    const { detail } = req;
    try {
        if (detail) {
            res.status(200).send(detail)
        } else {
            res.status(404).send("Category is not exists")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
const UpdateCategory = async (req, res) => {
    const { CategoryName } = req.body;
    const { detail } = req;
    try {
        if (CategoryName) {
            if (detail) {
                detail.CategoryName = CategoryName;
                await detail.save();
                res.status(200).send(detail)
            } else {
                res.status(404).send("CategoryName is not exists")
            }
        } else {
            res.status(403).send("Data is not enough")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const DeleteCategory = async (req, res) => {
    const { detail } = req;
    try {
        if (detail) {
            detail.IsActive = false;
            await detail.save();
            res.status(200).send(detail)
        } else {
            res.status(404).send("Category is not exists")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    AddCategory,
    AllCategory,
    DetailCategory,
    UpdateCategory,
    DeleteCategory
}