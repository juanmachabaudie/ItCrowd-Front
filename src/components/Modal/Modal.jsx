import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Style from "./Modal.module.css";
import { URL_PRODUCTS } from "../../constants";
import Input from "../Forms/Re-usable/Input";

const Modal = ({ setModal }) => {
  const [inputValue, setInputValue] = useState({ password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${URL_PRODUCTS}/${id}`;
    await axios.delete(url, {
      headers: {
        Authorization: inputValue.password === "admin" && "admin",
      },
    });
    setModal();
    navigate(-1);
  };

  return (
    <div className={Style.modal}>
      <div className={Style.container}>
        <h2 className={Style.title}>Are you sure to delete this product?</h2>
        <form className={Style.form} onSubmit={handleSubmit}>
          <Input
            name="password"
            onChange={handleInputChange}
            placeholder="Password"
            type="password"
            value={inputValue.password}
          />
          <button className={Style.btn}>Delete</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
