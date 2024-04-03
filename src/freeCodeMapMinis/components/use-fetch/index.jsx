import { useState, useEffect } from "react";

export default function useFetch(url, options = {}) {
  // w. need 3 states, data, pending, error
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setPending(true);
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();

      setData(result);
      setPending(false);
    } catch (e) {
      setError(`${e}. Some Error occurred`);
      setPending(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, pending, error };
}
