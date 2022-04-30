import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Style from "./Main.module.css";
import ProductCard from "../../components/Cards/ProductCard";
import { URL_PRODUCTS } from "../../constants";

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsCall = async () => {
      const call = await axios.get(URL_PRODUCTS);
      const data = call.data.products;

      setProducts(data);
    };
    productsCall();
  }, []);

  return (
    <div>
      <div>
        <h1 className={Style.title}>Welcome to our site!</h1>
        <p className={Style.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam impedit
          quidem a, reprehenderit assumenda, aspernatur ducimus minus dolorum nisi
          repellendus aliquid hic fuga fugiat ad adipisci possimus incidunt delectus.
        </p>
      </div>
      <div className={Style.productsContainer}>
        <h2 className={Style.subtitle}>Take a look at some of our cars!</h2>
        {products.map((product, i) => (
          <Link key={i} className={Style.card} to={`/products/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Main;
