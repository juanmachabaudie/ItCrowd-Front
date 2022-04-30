import React from 'react';
import Style from "./BrandCard.module.css";

const BrandCard = ({ brand }) => {
    return (
        <div className={Style.cardContainer}>
            <img className={Style.img} src={brand.logo} alt={brand.id} />
        </div>
    )
}

export default BrandCard