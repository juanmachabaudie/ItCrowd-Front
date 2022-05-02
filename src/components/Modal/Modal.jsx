import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Style from "./Modal.module.css";
import { URL_PRODUCTS } from "../../constants";
import Input from "../Forms/Re-usable/Input";
import SubmitBtn from "../Forms/Re-usable/SubmitBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

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
        <FontAwesomeIcon className={Style.exit} icon={solid("xmark")} onClick={() => setModal()} />
        <h2 className={Style.title}>Are you sure to delete this product?</h2>
        <form className={Style.form} onSubmit={handleSubmit}>
          <Input
            name="password"
            onChange={handleInputChange}
            placeholder="Password"
            type="password"
            value={inputValue.password}
          />
          <SubmitBtn text="Delete" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
