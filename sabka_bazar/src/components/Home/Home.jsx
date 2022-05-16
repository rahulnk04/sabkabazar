import OfferSlider from "../slider/OfferSlider";
import MainWrap from "../wrapper/Wrapper";
import Categories from "../categories/Categories";
import MetaData from "../../utils/meta_data/MetaData";

const Home = () => {
  return (
    <MainWrap>
      <MetaData title={"Home - Sabka Bazar"}/>
      <OfferSlider />
      <Categories />
    </MainWrap>
  );
};

export default Home;
