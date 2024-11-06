import React, { useState, useEffect } from "react";
import Title from "./components/Title";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);

  useEffect(() => {
    const titleTimer = setTimeout(() => {
      setIsTitleVisible(true);
    }, 200);

    return () => clearTimeout(titleTimer);
  }, []);

  useEffect(() => {
    const galleryTimer = setTimeout(() => {
      setIsGalleryVisible(true);
    }, 1000);

    return () => clearTimeout(galleryTimer);
  }, []);

  return (
    <div className="bg-vanilla min-h-screen">
      <div className={`transition-all duration-1000 ease-in-out transform ${isTitleVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
        <Title />
      </div>
      <div className={`transition-all duration-1000 ease-in-out transform ${isGalleryVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
        <Gallery />
      </div>
      <Footer />
    </div>
  )
}

export default App;