import Product from "../../db/models/product.js";
import dbConnect from "../../../pages/db/connect.js";

export default async function handler(request, response) {
  await dbConnect();
  console.log(request.query)
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id);

  if (!product) {
    return response.status(404).json({ status: "Not Found" });
  }

  response.status(200).json(product);
}
};
