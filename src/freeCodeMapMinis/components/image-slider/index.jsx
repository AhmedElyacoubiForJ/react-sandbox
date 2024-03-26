import "./styles.css";
import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(url) {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        //setCurrentSlide(0);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>;
  }

  console.log(images);

  return (
    <div className="container">
      <BsArrowLeftCircleFill className="arrow arrow-left" />
      {images && images.length > 0
        ? images.map((image, index) => {
            return (
              <img
                key={image.id}
                src={image.download_url}
                alt={image.download_url}
                className="current-image"
              />
            );
          })
        : null}
      <BsArrowRightCircleFill className="arrow arrow-right" />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => {
              return (
                <button key={index} className="current-indicator">
                </button>
              );
            })
          : null}
      </span>
    </div>
  );
}
