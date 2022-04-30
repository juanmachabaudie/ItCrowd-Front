import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Style from "./CreateUpdateProductForm.module.css";
import axios from "axios";
import Input from "../Re-usable/Input";
import Select from "../Re-usable/Select";
import SubmitBtn from "../Re-usable/SubmitBtn";
import { URL_PRODUCTS } from "../../../constants";

const initialInputValues = {
  name: "",
  description: "",
  image: "",
  price: "",
  brandid: 0,
  password: "",
};

const CreateUpdateProductForm = ({ view }) => {
  const [inputValues, setInputValues] = useState(initialInputValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  let handleSubmit;
  const { id } = useParams();

  if (view === "create") {
    const url = `${URL_PRODUCTS}/create`;
    handleSubmit = async (e) => {
      e.preventDefault();
      await axios.post(url, inputValues);
    };
  } else if (view === "update") {
    const url = `${URL_PRODUCTS}/${id}`;
    handleSubmit = async (e) => {
      e.preventDefault();
      await axios.put(url, inputValues);
    };
  }

  return (
    <form className={Style.form} onSubmit={handleSubmit}>
      <Input
        placeholder="Name"
        onChange={handleInputChange}
        name="name"
        value={inputValues.name}
        type="text"
      />
      <Input
        placeholder="Description"
        onChange={handleInputChange}
        name="description"
        value={inputValues.description}
        type="text"
      />
      <Input
        placeholder="Image"
        onChange={handleInputChange}
        name="image"
        value={inputValues.image}
        type="text"
      />
      <Input
        placeholder="Price"
        onChange={handleInputChange}
        name="price"
        value={inputValues.price}
        type="number"
      />
      <Select onChange={handleInputChange} name="brandid" value={inputValues.brandid} />
      <Input
        placeholder="Password"
        onChange={handleInputChange}
        name="password"
        value={inputValues.password}
        type="password"
      />
      <SubmitBtn type="submit" />
    </form>
  );
};

export default CreateUpdateProductForm;
