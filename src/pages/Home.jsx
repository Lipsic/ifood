import MainContainer from "../containers/home/MainContainer";
import Header from "../containers/Header";
import SmallBanner from "../containers/home/SmallBanner";
import BigBanner from "../containers/home/BigBanner";
import BannerFamosos from "../containers/home/FamososBanners";
import "swiper/css";
import TiposCarroussel from "../containers/home/TiposCarroussel";
import CardStackFilter from "../containers/home/CardStackFilter";
import Lojas from "../containers/home/Lojas";
import { useEffect } from "react";


function Home() {
  useEffect(() => {
    console.log("Home component was rendered!");
  });

  return (
    <>
      <Header />
      <MainContainer>
        <SmallBanner />
        <BigBanner />
        <BannerFamosos />
        <TiposCarroussel />
        <CardStackFilter />
        <Lojas />
      </MainContainer>
    </>
  );
}

export default Home;
