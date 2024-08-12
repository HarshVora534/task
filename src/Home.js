import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list?")
      .then((response) => setImages(response.data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  if (images.length === 0) {
    return <p>Loading images...</p>;
  }

  return (
    <div>
      <div className="slider">
        <button onClick={prevSlide} className="prev">
          Previous
        </button>
        <div className="divImage">
          <img
            src={images[currentIndex].download_url}
            alt={images[currentIndex].author}
            className="image"
          />
          <p>{images[currentIndex].author}</p>
        </div>
        <button onClick={nextSlide} className="next">
          Next
        </button>
      </div>
      <h2 className='categories'>Categories</h2>
      <ul className='categoryDetails'>
        {categories.map(category => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
