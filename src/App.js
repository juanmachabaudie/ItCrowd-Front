import React, { Fragment } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./Views/Main/Main";
import Products from "./Views/Products/Products";
import Brands from "./Views/Brands/Brands";
import Admin from "./Views/Admin/Admin";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import CreateUpdateProductForm from "./components/Forms/CeateUpdateProductForm/CreateUpdateProductForm";


const App = () => {

  let navigate = useNavigate();

  return (
    <Fragment>
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/brands" element={<Brands />} />
          <Route path="/:brands/products" element={<Brands />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<Products />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/:req" element={<Admin />} />
          <Route path="/admin/productDetail/:id" element={<ProductDetail admin={true} turnView={() => navigate(-1)} productDetail={2} />} />
          <Route path="/admin/productDetail/:id/update" element={<CreateUpdateProductForm view="update" />} />
        </Routes>
      </div>
    </Fragment>
  );
};

export default App;
