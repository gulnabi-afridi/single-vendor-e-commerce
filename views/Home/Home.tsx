import React from "react";
import Wrapper from "../../components/shared/ComponentWrapper/Wrapper";
import ProductCard from "../../components/shared/ProductCards/ProductCard";
import { Data } from "../../constants/Data/JSON";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Autoplay } from "swiper";
function Home() {
  return (
    <Wrapper>
      <div className="w-full h-[calc(100vh-140px)] bg-[url('/Assets/home/heroBg.jpg')] bg-bottom bg-cover bg-no-repeat "></div>
      <div className="h-[300px] max-w-[375px] sm:max-w-screen-sm md:max-w-screen-md  lg:max-w-full my-10">
        <Swiper
         slidesPerView={4}
         spaceBetween={25}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
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
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Mousewheel, Autoplay]}
          className="mySwiper"
        >
          {Data.ProductsSliderData.map((item: any, index: number) => (
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
  
    </Wrapper>
  );
}

export default Home;
