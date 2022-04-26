import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navigation from '../../components/Navigation/Navigation';
import CreateUpdateProductForm from '../../components/Forms/CeateUpdateProductForm/CreateUpdateProductForm';
import CreateBrandForm from "../../components/Forms/CreateBrandForm/CreateBrandForm";
import ProductCard from "../../components/Cards/ProductCard";
import Style from "./Admin.module.css";
import { URL_PRODUCTS } from '../../constants';

const Admin = () => {

    const [view, setView] = useState({
        main: true,
        createProduct: false,
        createBrand: false
    });
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productsCall = async () => {
            const call = await axios.get(URL_PRODUCTS);
            const data = call.data.data
            setProducts(data)
        }
        productsCall();
    }, [])


    return (
        <>
            <Navigation view={view} setView={setView} />
            {
                view.main && (
                    <>
                        <h1 className={Style.title}>What would you like to do?</h1>
                        <h3 className={Style.subtitle}>Here you have your products</h3>
                        <div className={Style.container}>
                            {
                                products.map((product, i) => (
                                    <Link key={i} className={Style.card} to={`/admin/productDetail/${product.id}`}>
                                        <ProductCard product={product} />
                                    </Link>
                                ))
                            }
                        </div>
                    </>
                )
            }
            {
                view.createProduct && (<CreateUpdateProductForm view="create" />)
            }
            {
                view.createBrand && (<CreateBrandForm />)
            }
        </>
    )
}

export default Admin