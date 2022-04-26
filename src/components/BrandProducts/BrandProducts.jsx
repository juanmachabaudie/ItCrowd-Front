import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { URL_PRODUCTS } from "../../constants";
import Style from "./BrandProducts.module.css";
import ProductCard from '../Cards/ProductCard';

const BrandProducts = ({ turnBrands }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const productsByBrand = async () => {
            const url = `${URL_PRODUCTS}/brand/${turnBrands[1]}`;
            const brandProducts = await axios.get(url);
            const data = brandProducts.data.byBrand;

            setProducts(data);
        }

        productsByBrand();

    }, [])


    return (
        <div className={Style.container}>
            <div className={Style.buttons}>
                <button className={Style.button} onClick={turnBrands[0]}>Return</button>
                <Link className={Style.button} to={"/products"}>See all</Link>
            </div>
            <div className={Style.cardsContainer}>
                {
                    products.map((product, i) => (
                        <Link key={i} className={Style.card} to={`/products/${product.id}`}>
                            <ProductCard product={product} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default BrandProducts;