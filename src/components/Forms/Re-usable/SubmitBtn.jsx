import React from 'react';
import Style from "./SubmitBtn.module.css";

const SubmitBtn = ({ type }) => {
    return (
        <button className={Style.submit} type={type} >Submit</button>
    )
}

export default SubmitBtn