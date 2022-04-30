import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { URL_PRODUCTS } from "../../constants";
import Style from "./BrandProducts.module.css";
import ProductCard from "../Cards/ProductCard";

const BrandProducts = ({ brand, setView }) => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsByBrand = async () => {
      const url = `${URL_PRODUCTS}/brand/${brand}`;
      const brandProducts = await axios.get(url);
      const data = brandProducts.data.products;

      setProducts(data);
    };

    productsByBrand();
  }, []);

  const returnBtn = () => {
    setView();
    navigate(-1);
  }

  return (
    <div className={Style.container}>
      <div className={Style.buttons}>
        <button className={Style.button} onClick={returnBtn}>
          Return
        </button>
        <Link className={Style.button} to={"/products"}>
          See all
        </Link>
      </div>
      <div className={Style.cardsContainer}>
        {products.map((product, i) => (
          <Link key={i} className={Style.card} to={`/products/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
