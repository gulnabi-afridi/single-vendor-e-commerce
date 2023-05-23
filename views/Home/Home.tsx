import React from "react";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapper";
import Hero from "./Hero";
import ProductSlider from "@/components/shared/Slider/ProductSLider";
import { Data } from "../../constants/Data/JSON";

function Home() {
  return (
    <Wrapper>
      <div className="w-full flex flex-col gap-12">
        <Hero />
        <ProductSlider title="Our Best Selling Products" data={Data.ProductsSliderData}/>
        <ProductSlider title="Our Recent Products" moveLeft={true} data={Data.RecentProductsData}/>
      </div>
    </Wrapper>
  );
}

export default Home;
