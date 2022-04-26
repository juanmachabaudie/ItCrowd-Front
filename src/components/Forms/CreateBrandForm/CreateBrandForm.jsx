import React, { useState } from 'react';
import axios from 'axios';
import Input from '../Re-usable/Input';
import Style from "./CreateBrandForm.module.css";

const initialInputValues = {
    name: "",
    logo: "",
    password: ""
};

const createBrand = () => {

    const [inputValues, setInputValues] = useState(initialInputValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value
        })
    };

    const url = "http://localhost:3001/brands";

    const handleSumbit = async (e) => {
        e.preventDefault()
        const response = axios.post(url, inputValues);
    };

    return (
        <form className={Style.form} onSubmit={handleSumbit}>
            <Input name="name" onChange={handleInputChange} placeholder="Name" type="text" value={inputValues.name} />
            <Input name="logo" onChange={handleInputChange} placeholder="Logo" type="text" value={inputValues.logo} />
            <Input name="password" onChange={handleInputChange} placeholder="Password" type="password" value={inputValues.password} />
            <button className={Style.submit} type="submit">Submit</button>
        </form>
    )
}

export default createBrand