import "./styles.css";
import { useState, useEffect } from "react";

// We want to show 20 products at first,
// and each time the user needs more, we load the next 20 products
// without loading the previous 20 again.
// This continues until we have loaded a maximum of 100 products.


// https://dummyjson.com/products?limit=20&skip=0 0 * 20
// https://dummyjson.com/products?limit=20&skip=20 1 * 20
// https://dummyjson.com/products?limit=20&skip=40 2 * 20
// https://dummyjson.com/products?limit=20&skip=60  3 * 20
// https://dummyjson.com/products?limit=20&skip=80  4 * 20
// and so we archive the maximum of 100 products.
export function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  // how many times you are clicking the button
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      setProducts((prevData) => [...prevData, ...data.products]);
      setCount(count + 1);
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (errorMsg) {
    return <div className="error-msg">{errorMsg}</div>;
  }

  console.log(products);

  return (
    <div>
      {products.map((item) => (
        <div className="product" key={item.id}>
        <img src={item.thumbnail} alt={item.title} />
        <p>{item.title}</p>
      </div>
      ))}
    </div>
  );
}
