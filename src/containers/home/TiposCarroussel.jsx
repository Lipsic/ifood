import React from "react";
// import { famosos-bannersStyles } from "../styles/HorizontalScroll";
import BannerCard from "../../UI/BannerCard";
import primeira from "../../assets/tipos-carroussel/mercado.avif";
import segunda from "../../assets/tipos-carroussel/brasileira.avif";
import terceira from "../../assets/tipos-carroussel/bagcupones.avif";
import quarta from "../../assets/tipos-carroussel/marmita.avif";
import quinta from "../../assets/tipos-carroussel/padaria.avif";
import sexta from "../../assets/tipos-carroussel/lanches.avif";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

function TiposCarroussel() {
  const bannerContent = [
    { image: primeira, label: "mercado" },
    { image: segunda, label: "brasileira" },
    { image: terceira, label: "promoções" },
    { image: quarta, label: "mamitas" },
    { image: quinta, label: "padarias" },
    { image: sexta, label: "lanches" },
  ];
  const styles = { borderRadius: "10%" };
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

export default TiposCarroussel;
