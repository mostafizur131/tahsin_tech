import React from "react";
import { useProducts } from "../context/ProductProvider";

const Home = () => {
  const { data } = useProducts();

  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

export default Home;
