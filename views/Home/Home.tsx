import React from "react";
<<<<<<< HEAD
import Wrapper from "@/components/shared/ComponentWrapper/Wrapper";
import Hero from "./Hero";
import OurBestSellingProducts from "./OurBestSellingProducts";
import OurRecentProducts from "./OurRecentProducts";
=======
import Wrapper from "../../components/shared/ComponentWrapper/Wrapper";
import ProductCard from "../../components/shared/ProductCards/ProductCard";
import { Data } from "../../constants/Data/JSON";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Autoplay } from "swiper";
import Hero from "./Hero";

>>>>>>> f790907cb8f963d0c1e4b426693fa5490f9d4d7c
function Home() {
  return (
    <Wrapper>
      <div className="w-full flex flex-col gap-10">
        <Hero />
        <OurBestSellingProducts />
        <OurRecentProducts />
      </div>
    </Wrapper>
  );
}

export default Home;
