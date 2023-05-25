import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Autoplay } from "swiper";
import ProductCard from "@/components/shared/ProductCards/ProductCard";

import H1Heading from "@/components/shared/CustomTypography/H1Heading";

interface Props {
  data: any;
  title: string;
  slidesToShow?: number;
  moveLeft?: boolean;
}

const ProductSlider: React.FC<Props> = ({
  data,
  title,
  slidesToShow = 4,
  moveLeft = false,
}) => {
  return (
    <div className="w-full flex flex-col gap-8 items-center justify-center">
      <p className="text-main-brand leading-10 font-poppins font-semibold text-[30px] text-center sm:text-[36px]">{title}</p>
      <div className="h-[450px] max-w-full">
        <Swiper
          slidesPerView={slidesToShow}
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
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: slidesToShow,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection:moveLeft
          }}
          modules={[Pagination, Mousewheel, Autoplay]}
          className="mySwiper"
        >
          {data.map((item: any, index: number) => (
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

export default ProductSlider;
