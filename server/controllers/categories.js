const {StatusCodes} = require('http-status-codes');
const Category = require('../models/Category');

const createCat = async (req, res) => {
    const {name} = req.body;
    if(!name) return res.status(StatusCodes.BAD_REQUEST).json({error:true,msg:'data format error'});
    try {
        const newCat = new Category({name});
        const category = await newCat.save();
        res.status(StatusCodes.CREATED).json(category)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}

const updateCat = async (req, res) => {
    const {name} = req.body;
    if(!name) return res.status(StatusCodes.BAD_REQUEST).json({error:true,msg:'data format error'});
    try {
        const updatedCat = await Category.findByIdAndUpdate(req.params.id,{name}, {new:true, runValidators: true});
        res.status(StatusCodes.CREATED).json(updatedCat);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}

const deleteCat = async (req, res) => {

}

const getCategories = async (req, res) => {

}

const getCategory = async (req, res) => {

}

module.exports = {
    createCat,
    updateCat,
    deleteCat,
    getCategories,
    getCategory
}