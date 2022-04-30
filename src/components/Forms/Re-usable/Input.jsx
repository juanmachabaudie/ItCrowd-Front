import React from 'react';
import Style from "./Input.module.css";

const Input = ({ name, onChange, placeholder, type, value }) => {

    return (
        <input className={Style.input} name={name} onChange={onChange} placeholder={placeholder} type={type} value={value} required />
    )
}

export default Input