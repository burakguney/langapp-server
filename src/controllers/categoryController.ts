import { Request, Response } from 'express';
import categorySchema from '../schemas/categorySchema';

const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await categorySchema.getCategories();

        return res.status(200).json(categories);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error.message);
    }
}

const createCategory = async (req: Request, res: Response) => {
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

export default { getCategories, createCategory };