import React from "react";
import BannerCard from "../../UI/BannerCard";

import primeira from "../../UI/BannerCard";
import segunda from "../../assets/famosos-banners/nippon.avif";
import terceira from "../../assets/famosos-banners/p.avif";
import quarta from "../../assets/famosos-banners/pao-de-trigo.avif";
import quinta from "../../assets/famosos-banners/santa-rita-panificadora.avif";
import sexta from "../../assets/famosos-banners/tempero-d-aldeia.avif";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

function BannerFamosos() {
  const bannerContent = [
    { image: segunda, label: "Nippon" },
    { image: terceira, label: "Padaria Protugália" },
    { image: quarta, label: "Pão de Trigo" },
    { image: quinta, label: "Panificadora Santa Rita" },
    { image: sexta, label: "Tempero d'Aldeia" },
  ];

  const xstyles = {};
  return (
    <section>
      <Swiper
        spaceBetween={15}
        slidesPerView={3}
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
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {bannerContent.map((item, i) => (
          <SwiperSlide
            key={`smallbanner__${i}`}
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
          >
            <BannerCard
              image={item.image}
              label={item.label}
              xstyles={xstyles}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default BannerFamosos;
