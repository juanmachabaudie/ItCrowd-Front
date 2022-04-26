import React, { useEffect, useState } from 'react';
import Style from "./Select.module.css";
import axios from 'axios';

const Select = ({ name, onChange, value }) => {

    const [brands, setBrands] = useState([])

    useEffect(() => {
        const brandList = async () => {
            const url = "http://localhost:3001/brands";
            const call = await axios.get(url);
            const brands = call.data.data;
            setBrands(brands)
        }
        brandList();
    }, [])

    const convertToDefaultParameter = (name, value) => ({
        target: {
            name,
            value
        }
    })

    return (
        <select className={Style.select} onChange={e => onChange(convertToDefaultParameter(name, e.target.value))} value={value} >
            <option value="#">None</option>
            {
                brands.map((brand, i) => (
                    <option key={i} value={brand.id}>{brand.name}</option>
                ))
            }
        </select>
    )
}

export default Select