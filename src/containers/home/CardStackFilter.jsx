import React from "react";
import { Button } from "@mui/material";
import { StackFilterStyles } from "../../styles/home/CardStackFilter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function CardStackFilter() {
  return (
    <StackFilterStyles>
      <Swiper
        spaceBetween={13}
        slidesPerView={3}
        breakpoints={{
          576: {
            width: 576,
            slidesPerView: 3,
          },
          768: {
            width: 768,
            slidesPerView: 4,
          },
          1000: {
            width: 1000,
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide>
          <Button size="small">Ordenar</Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button size="small">Entregar Grátis</Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button size="small">Vale-refeição</Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button size="small">Distância</Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button size="small">Entrega Parceira</Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button size="small">Filtros</Button>
        </SwiperSlide>
      </Swiper>
    </StackFilterStyles>
  );
}

export default CardStackFilter;
