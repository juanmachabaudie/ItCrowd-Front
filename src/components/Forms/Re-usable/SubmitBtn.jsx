import React from 'react';
import Style from "./SubmitBtn.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const SubmitBtn = ({ text }) => {
    return (
        <div className={Style.container}>
            <button className={Style.btn}>
                <span>{text}</span>
                <FontAwesomeIcon className={Style.icon} icon={solid("check")} />
            </button>
        </div>
    )
}

export default SubmitBtn