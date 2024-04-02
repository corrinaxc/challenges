import useSWR from "swr";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Products() {
const { data } = useSWR(`/api/products`, fetcher);
console.log("data", data);
if (!data) {
    return <div>Loading.....</div>
}

return (
    <>
    <ul>
        {data.map((product) => (
            <li key={product.id}>
                <Link href={`/products/${product.id}`}>{product.name}</Link>
                <p>{product.description}</p>
                <p>price: {product.currency}{product.price}</p>
                <p>category: {product.category}</p>
            </li>
        ))}
    </ul>
    </>
)};