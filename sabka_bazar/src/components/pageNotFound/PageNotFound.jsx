import MetaData from "../../utils/meta_data/MetaData";
import styles from "./PageNotFound.module.scss";

const PageNotFound = () => {
  return (
    <main className={styles.main}>
       <MetaData title={"Not Found - Sabka Bazar"}/>
      <div>Error 404 Page not found!</div>
    </main>
  );
};

export default PageNotFound;
