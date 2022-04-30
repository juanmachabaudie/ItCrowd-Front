import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { URL_PRODUCTS } from "../../constants";
import ProductCard from "../../components/Cards/ProductCard";
import Style from "./Products.module.css";
import ProductDetail from "../../components/ProductDetail/ProductDetail";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState({
    allProducts: true,
    productDetail: false,
  });

  useEffect(() => {
    const productsCall = async () => {
      const call = await axios.get(URL_PRODUCTS);
      const data = call.data.products;

      setProducts(data);
    };
    productsCall();
  }, []);

  const changeView = () => {
    setView({ ...view, allProducts: false, productDetail: true });
  };

  return (
    <>
      {view.allProducts && (
        <>
          <h1 className={Style.title}>Products</h1>
          <div className={Style.productsContainer}>
            {products.map((product, i) => (
              <Link
                key={i}
                className={Style.card}
                onClick={changeView}
                to={`/products/${product.id}`}
              >
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        </>
      )}
      {view.productDetail && (
        <>
          <h1 className={Style.title}>Product Detail</h1>
          <ProductDetail
            admin={false}
            turnView={() => {
              setView({ ...view, allProducts: true, productDetail: false });
            }}
          />
        </>
      )}
    </>
  );
};

export default Products;
