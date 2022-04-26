import React from 'react';
import Style from "./ProductCard.module.css";

const Card = ({ product }) => {

    return (
        <div className={Style.cardContainer}>
            <h2 className={Style.cardTitle} >{product.name}</h2>
            <img className={Style.img} src={product.image} alt={product.name} />
            <p className={Style.price}>U$D {product.price}</p>
        </div>
    )
}

export default Card