import React from "react";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapper";
import Hero from "./Hero";
import OurBestSellingProducts from "./OurBestSellingProducts";
import OurRecentProducts from "./OurRecentProducts";
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
