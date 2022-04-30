import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Style from "./Brands.module.css";
import BrandCard from "../../components/Cards/BrandCard";
import BrandProducts from "../../components/BrandProducts/BrandProducts";
import { URL_BRANDS } from "../../constants";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [view, setView] = useState({
    brands: true,
    brandProducts: false,
  });
  const [brand, setBrand] = useState("");

  useEffect(() => {
    const brandsCall = async () => {
      const brandsCall = await axios.get(URL_BRANDS);
      const data = brandsCall.data.brands;

      setBrands(data);
    };

    brandsCall();
  }, []);

  const changeView = () => {
    setView({ ...view, brands: false, brandProducts: true });
  };

  return (
    <div className={view.brands ? Style.brandContainer : null}>
      {view.brands &&
        brands.map((brand, i) => (
          <Link
            key={i}
            to={`/${brand.id}/products`}
            onClick={() => {
              changeView();
              setBrand(brand.id);
            }}
          >
            <BrandCard brand={brand} />
          </Link>
        ))}
      {view.brandProducts && (
        <BrandProducts
          brand={brand}
          setView={() => setView({ ...view, brands: true, brandProducts: false })}
        />
      )}
    </div>
  );
};

export default Brands;
