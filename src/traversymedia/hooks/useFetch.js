import { useState, useEffect } from "react";

/**
 * A custom hook for making HTTP requests.
 *
 * @param {string} url - The URL to fetch.
 * @param {object} options - The options for the fetch call, including any
 * headers or other configuration.
 * @returns {object} An object containing the response data, loading state, and
 * any errors that occurred.
 */
function useFetch( url, options ) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      } 
    };
    // Make the initial fetch
    fetchData();
  }, []);
  return { data, loading, error };
}

export default useFetch;
