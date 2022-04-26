import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Style from "./ProductDetail.module.css";
import { URL_PRODUCTS } from "../../constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Modal from "../Modal/Modal";

const ProductDetail = ({ turnView, admin }) => {

    const [detail, setDetail] = useState({});
    const [modal, setModal] = useState({ overlay: false });
    const { id } = useParams();

    const modalOff = () => {
        setModal({ ...modal, overlay: false });
    };
    const modalOn = () => {
        setModal({ ...modal, overlay: true });
    };

    useEffect(() => {

        const detailOne = async () => {

            const url = `${URL_PRODUCTS}/${id}`;
            const call = await axios.get(url);
            const product = call.data.product;
            setDetail(product);
        };
        detailOne();
    }, [])

    return (
        <div className={Style.container}>
            <button className={Style.return} onClick={turnView}>Return</button>
            <h2 className={Style.title}>{detail.name}</h2>
            {
                admin ? (
                    <div className={Style.btns}>
                        <Link className={Style.btn} to={`/admin/productDetail/${id}/update`} >
                            <FontAwesomeIcon className={Style.icon} icon={solid("pen-clip")} />
                        </Link>
                        <button className={Style.btn} onClick={modalOn}>
                            <FontAwesomeIcon className={Style.icon} icon={solid("trash")} />
                        </button>
                    </div>
                ) : null
            }
            <img className={Style.image} src={detail.image} alt={detail.name} />
            <p className={Style.price}>U$D {detail.price}</p>
            <p className={Style.description}>{detail.description}</p>
            {
                admin && modal.overlay ? (<Modal setModal={modalOff} />) : null
            }
        </div>
    )
}

export default ProductDetail