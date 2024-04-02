import { getProductById } from "../../../services/productServices.js";
import products from "../../../services/productServices.js";

export default function handler(request, response) {
    const id = request.query.id;
    response.status(200).json(getProductById(id));
};