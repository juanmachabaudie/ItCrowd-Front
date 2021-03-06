import React, { useEffect, useState } from "react";
import Style from "./Select.module.css";
import axios from "axios";
import { URL_BRANDS } from "../../../constants";

const Select = ({ name, onChange, value }) => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const brandList = async () => {
      const call = await axios.get(URL_BRANDS);
      const brands = call.data.brands;
      setBrands(brands);
    };
    brandList();
  }, []);

  const convertToDefaultParameter = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <select
      className={Style.select}
      onChange={(e) => onChange(convertToDefaultParameter(name, e.target.value))}
      value={value}
    >
      <option value="#">None</option>
      {brands.map((brand, i) => (
        <option key={i} value={brand.id}>
          {brand.id}
        </option>
      ))}
    </select>
  );
};

export default Select;
