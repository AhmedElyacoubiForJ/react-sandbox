import useFetch from "."

export default function UseFetchHookTest() {
    // https://jsonplaceholder.typicode.com/todos
    //
    const { data, pending, error } = useFetch("https://dummyjson.com/products", {});
    console.log(data)
    return (
        <div>
            <h1>Use Fetch Hook</h1>
            {pending ? <h3>Pending! Please wait</h3> : null}
            {error ? <h3>{error}</h3> : null}
            {
                data && data.products && data.products.length
                ? data.products.map( (product) => (<p key={product.id}>{product.title}</p>))
                : null
            }
        </div>
    )
}