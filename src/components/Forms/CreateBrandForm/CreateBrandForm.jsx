import React, { useState } from "react";
import axios from "axios";
import { URL_BRANDS } from "../../../constants";
import Input from "../Re-usable/Input";
import SubmitBtn from "../Re-usable/SubmitBtn";
import Style from "./CreateBrandForm.module.css";

const initialInputValues = {
  name: "",
  logo: "",
  password: "",
};

const createBrand = () => {
  const [inputValues, setInputValues] = useState(initialInputValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    axios.post(URL_BRANDS, inputValues);
  };

  return (
    <form className={Style.form} onSubmit={handleSumbit}>
      <Input
        name="name"
        onChange={handleInputChange}
        placeholder="Name"
        type="text"
        value={inputValues.name}
      />
      <Input
        name="logo"
        onChange={handleInputChange}
        placeholder="Logo"
        type="text"
        value={inputValues.logo}
      />
      <Input
        name="password"
        onChange={handleInputChange}
        placeholder="Password"
        type="password"
        value={inputValues.password}
      />
      <SubmitBtn text="Submit" />
    </form>
  );
};

export default createBrand;
