import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Autoplay } from "swiper";
import ProductCard from "@/components/shared/ProductCards/ProductCard";
import { Data } from "../../constants/Data/JSON";
import H1Heading from "@/components/shared/CustomTypography/H1Heading";

const OurRecentProducts = () => {
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center">
      <H1Heading>Our Recent Products</H1Heading>
      <div className="h-[450px] max-w-full">
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            reverseDirection:true,
          }}
          modules={[Pagination, Mousewheel, Autoplay]}
          className="mySwiper"
        >
          {Data.RecentProductsData.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <ProductCard
                title={item.title}
                price={item.price}
                newArrival={item.new}
                sale={item.sale}
                soldout={item.soldOut}
                picture={item.picture}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurRecentProducts;
