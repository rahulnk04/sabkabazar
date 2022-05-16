import Wrapper from "../wrapper/Wrapper";
import styles from "./Products.module.scss";
import ProductCategoryList from "./ProductCategoryList";
import ProductsRouter from "./ProductsRouter";
import CategoryDropdown from "./CategoryDropdown";
import MetaData from "../../utils/meta_data/MetaData";

const Products = () => {
  return (
    <Wrapper>
      <MetaData title={"Products - Sabka Bazar"} />
      <div className={styles["products-container"]}>
        <ProductCategoryList />
        <CategoryDropdown />
        <ProductsRouter />
      </div>
    </Wrapper>
  );
};
export default Products;
