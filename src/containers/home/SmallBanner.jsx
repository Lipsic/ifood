import React from "react";
// import { TiposStyles } from "../styles/HorizontalScroll";
import { Card, CardMedia } from "@mui/material";
import BannerCard from "../../UI/BannerCard";
import mercado from "../../assets/tipos/Mercados.avif";
import farmacia from "../../assets/tipos/Farmacia.avif";
import pet from "../../assets/tipos/Pet.avif";
import bebidas from "../../assets/tipos/Bebidas.avif";
import shopping from "../../assets/tipos/floreseperfume.avif";
import gourmet from "../../assets/tipos/Gourmet.avif";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

function SmallBanner() {
  const bannerContent = [
    { image: mercado, label: "mercado" },
    { image: farmacia, label: "farmácia" },
    { image: pet, label: "pet" },
    { image: bebidas, label: "bebidas" },
    { image: shopping, label: "shopping" },
    { image: gourmet, label: "gourmet" },
  ];

  const styles = { borderRadius: "10px" };
  return (
    <section>
      <Swiper
        spaceBetween={50}
        breakpoints={{
          576: {
            width: 576,
            slidesPerView: 4,
          },
          768: {
            width: 768,
            slidesPerView: 5,
          },
        }}
        slidesPerView={3}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {bannerContent.map((item, i) => (
          <SwiperSlide key={`smallbanner__${i}`}>
            <BannerCard image={item.image} label={item.label} styles={styles} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default SmallBanner;
