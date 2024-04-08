import dbConnect from "../../db/connect";
import Product from "../../db/models/product.js";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const products = await Product.find();
    console.log(products);
    return response.status(200).json(products);
  } else {
    return response.status(405).json({message: "Method Not Allowed"});
  }
}
