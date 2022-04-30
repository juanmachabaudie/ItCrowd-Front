import React from "react";
import { NavLink } from "react-router-dom";
import Style from "./Navigation.module.css";

const Navigation = (props) => {
  const mainView = () => {
    props.setView({
      ...props.view,
      main: true,
      createProduct: false,
      createBrand: false,
    });
  };

  const createProductView = () => {
    props.setView({
      ...props.view,
      main: false,
      createProduct: true,
      createBrand: false,
    });
  };

  const createBrandView = () => {
    props.setView({
      ...props.view,
      main: false,
      createProduct: false,
      createBrand: true,
    });
  };

  return (
    <div className={Style.container}>
      <NavLink
        onClick={createProductView}
        className={({ isActive }) => (isActive ? Style.activeStyle : Style.navlink)}
        to={"/admin/newProduct"}
      >
        Add Product
      </NavLink>
      <NavLink
        onClick={mainView}
        className={({ isActive }) => (isActive ? Style.activeStyle : Style.navlink)}
        end
        to={"/admin"}
      >
        Control Panel
      </NavLink>
      <NavLink
        onClick={createBrandView}
        className={({ isActive }) => (isActive ? Style.activeStyle : Style.navlink)}
        to={"/admin/newBrand"}
      >
        Add Brand
      </NavLink>
    </div>
  );
};

export default Navigation;
