import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Product() {
const router = useRouter();
const { id } = router.query;

    const { data } = useSWR(`/api/products/${id}`, fetcher);
    if (!data) {
        return <div>Loading.....</div>
    }

    return (
        <>
        <ul>
                <li key={data.id}>
                    <h1>{data.name}</h1>
                    <p>{data.description}</p>
                    <p>price: {data.currency}{data.price}</p>
                    <p>category: {data.category}</p>
                </li>
        </ul>
        </>
    )};