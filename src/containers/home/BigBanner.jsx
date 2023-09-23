import React, { useEffect, useRef } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Card, CardMedia } from "@mui/material";
//banners
import capaPrincipal from "../../assets/big-banners/CapaPrincipal.avif";
import principal from "../../assets/big-banners/principal.avif";
import promoCafe from "../../assets/big-banners/promo-cafe.avif";
import promoPadaria from "../../assets/big-banners/promo-padarias.avif";
import promoRestaurante from "../../assets/big-banners/promo-restaurantes.avif";
// colocar hash para lazy loading
const BANNER_CONTENT = [
  {
    image: capaPrincipal,
    label: "",
  },
  {
    image: principal,
    label: "",
  },
  {
    image: promoCafe,
    label: "",
  },
  {
    image: promoPadaria,
    label: "",
  },
  {
    image: promoRestaurante,
    label: "",
  },
];

function BigBanner() {
  const swiperElRef = useRef(null);

  return (
    <section>
      <Swiper
        ref={swiperElRef}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          576: {
            width: 576,
            height: 300,
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1000: {
            width: 1000,
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {BANNER_CONTENT.map((item, i) => (
          <SwiperSlide key={`bigbanner__${i}`}>
            <Card
              style={{ display: "block", textAlign: "center" }}
              as="a"
              sx={{ maxWidth: 500, margin: 0 }}
            >
              <CardMedia
                component="img"
                sx={{ width: "95%", height: "100%", objectFit: "cotain" }}
                href=""
                image={item.image}
              />
              <p style={{ display: "inline", fontSize: "50%" }}>{item.label}</p>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default BigBanner;
