import React from "react";
import Wrapper from "../../components/shared/ComponentWrapper/Wrapper";
import ProductCard from "../../components/shared/ProductCards/ProductCard";

function Home() {
  return (
    <Wrapper>
      <div className="w-full h-[calc(100vh-140px)] bg-[url('/Assets/home/heroBg.jpg')] bg-bottom bg-cover bg-no-repeat "></div>
      <div className="w-full grid grid-cols-4">
        <ProductCard />
      </div>
    </Wrapper>
  );
}

export default Home;
