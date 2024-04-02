import useSWR from "swr";

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
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>price: {product.currency}{product.price}</p>
                <p>category: {product.category}</p>
            </li>
        ))}
    </ul>
    </>
)};
