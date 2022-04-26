import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Style from "./Navbar.module.css";

const Navbar = () => {



    return (
        <div className={Style.container}>
            <Link className={Style.logo} to={"/"}>
                <div>
                    <img className={Style.logoImg} src="https://autooswaldo.com/wp-content/uploads/sites/23/2018/09/Silueta-de-coche.png" />
                </div>
            </Link>
            <div className={Style.navlinks}>
                <NavLink className={({ isActive }) =>
                    isActive ? Style.activeStyle : Style.navlink} to={"/brands"}>
                    Brands
                </NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? Style.activeStyle : Style.navlink} to={"/products"}>
                    Products
                </NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? Style.activeStyle : Style.navlink} to={"/admin"}>
                    Admin
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar