import express from 'express';
import categorySchema from '../schemas/category.js';

/**
 * 
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns
 */
const createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        const category = await categorySchema.createCategory({
            name: name
        });

        return res.status(200).json(category);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error.message);
    }
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @returns 
 */
const getCategories = async (req, res) => {
    try {
        const categories = await categorySchema.getCategories();

        return res.status(200).json(categories);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error.message);
    }
}

export default { createCategory, getCategories };