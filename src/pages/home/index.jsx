import { useState } from "react";
import { useEffect } from "react";

import Navbar from "../../components/navbar";
import Products from "../../components/products";

import Images from "../../imagesProducts.json";

const Home = () => {
  const [images, setimages] = useState(Images);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () =>
      window.scrollY > 5 ? setIsScrolled(true) : setIsScrolled(false);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <section
        className="min-h-screen w-full h-full
        bg-cover bg-center bg-banner"
        id="banner"
      />
      <Products 
        fotos={images} 
      />
    </>
  );
};

export default Home;
