import "./HomeScreen.css";

import Navbar from "../Navbar";
import Backdrop from "../Backdrop";
import SideDrawer from "../SideDrawer";
import { useState,useEffect } from "react";
import Product from "../Product";

import { useSelector, useDispatch } from "react-redux";

import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  
  const dispatch = useDispatch();
  const getProducts = useSelector(state => state.getProducts);
  const { products, loading, error } = getProducts;
  
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <div className="homescreen">
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        <Product></Product>
        {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : products.map(product => (
          <Product/>
        ))}
        
      </div>
    </div>
  );
};

export default HomeScreen;
