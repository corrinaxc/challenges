import dbConnect from "@/pages/db/connect";
import Product from "@/components/Product";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const products = await products.find();
    return response.status(200).json(products);
  } else {
    return response.status(405).json({message: "Method Not Allowed"});
  }
}
