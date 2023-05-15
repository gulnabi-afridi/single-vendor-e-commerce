import React from "react";
import Wrapper from "../../components/shared/ComponentWrapper/Wrapper";
import ProductCard from "../../components/shared/ProductCards/ProductCard";
import { Data } from "../../constants/Data/JSON";
function Home() {
  return (
    <Wrapper>
      <div className="w-full h-[calc(100vh-140px)] bg-[url('/Assets/home/heroBg.jpg')] bg-bottom bg-cover bg-no-repeat "></div>
      <div className="w-full grid grid-cols-4">
        {Data.ProductsSliderData.map((item: any, index: number) => (
          <ProductCard
            key={index}
            title={item.title}
            price={item.price}
            newArrival={item.new}
            sale={item.sale}
            soldout={item.soldOut}
            picture={item.picture}
          />
        ))}
      </div>
    </Wrapper>
  );
}

export default Home;
