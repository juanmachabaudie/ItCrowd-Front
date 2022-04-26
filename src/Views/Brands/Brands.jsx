import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import Style from "./Brands.module.css";
import BrandCard from '../../components/Cards/BrandCard';
import BrandProducts from '../../components/BrandProducts/BrandProducts';
import { URL_BRANDS } from '../../constants';

const Brands = () => {

    const [brands, setBrands] = useState([])
    const [view, setView] = useState({
        brands: true,
        brandProducts: false
    });
    const [brand, setBrand] = useState(0)

    useEffect(() => {

        const brandsCall = async () => {
            const brandsCall = await axios.get(URL_BRANDS);
            const data = brandsCall.data.data;

            setBrands(data)
        }

        brandsCall();

    }, [])

    const changeView = () => {
        setView({ ...view, brands: false, brandProducts: true })
    };

    return (
        <div className={view.brands && Style.brandContainer}>
            {
                view.brands && (
                    brands.map((brand, i) => (
                        <Link key={i} to={`/${brand.name}/products`} onClick={() => { changeView(); setBrand(brand.id) }}>
                            <BrandCard brand={brand} />
                        </Link>
                    ))
                )
            }
            {
                view.brandProducts && (
                    <BrandProducts turnBrands={[() => setView({ ...view, brands: true, brandProducts: false }), brand]} />
                )
            }
        </div >
    )
}

export default Brands