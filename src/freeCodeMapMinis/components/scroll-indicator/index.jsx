import { useState, useEffect } from "react";

import "./scroll.css";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(url) {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      if (data && data.products && data.products.length) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setErrorMsg(error);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    const howMuchScrolled =
      document.documentElement.scrollTop || document.body.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (errorMsg) {
    return <div>Error occured ! {errorMsg}</div>;
  }

  if(loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      {/*  */}
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="carrent-profress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <br />
      {/*  */}
      <div className="data-container">
        {data && data.length > 0
          ? data.map((product) => {
              return <h2 key={product.id}>{product.title}</h2>;
            })
          : null}
      </div>
    </>
  );
}
