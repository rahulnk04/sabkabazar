import { Fragment, useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import CartBackground from "../../utils/overlay/CartBackground";
import CartOverlay from "../../utils/overlay/CartOverlay";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/reducer/productReducer";
import { getCategory } from "../../redux/reducer/categoryReducer";

const HeaderFooterWrapper = () => {
  const { isCartOpen } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <Fragment>
      {isCartOpen && (
        <Fragment>
          <CartBackground />
          <CartOverlay />
        </Fragment>
      )}
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default HeaderFooterWrapper;
