import { NextApiRequest, NextApiResponse } from "next";
import data from '../../public/api/cars.json';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(data); // API serving cars.json, use this to apply a search on the frontend
}