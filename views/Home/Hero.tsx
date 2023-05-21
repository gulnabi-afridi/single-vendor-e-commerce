import React from "react";
<<<<<<< HEAD

function Hero() {
  return (
    <div className="w-full relative flex justify-center items-center min-h-[700px] bg-[url('/Assets/home/heroBg.jpg')] bg-bottom bg-cover bg-no-repeat mt-10">
      {/* =====> text for the image */}
      <p className="text-white-main text-[50px] font-semibold uppercase z-10">
        Here will come text for the image
      </p>
      {/* ====> overly on image */}
      <div className="absolute top-0 left-0 w-full h-full bg-main-brand/20"></div>
    </div>
  );
}

export default Hero;
=======
import Wrapper from "../../components/shared/ComponentWrapper/Wrapper";

function Home() {
  return (
    <Wrapper>
      <div className="w-full relative flex justify-center items-center min-h-[700px] bg-[url('/Assets/home/heroBg.jpg')] bg-bottom bg-cover bg-no-repeat mt-10">
        {/* =====> text for the image */}
        <p className="text-main-brand text-[50px] font-semibold uppercase">
          Here will come text for the image
        </p>
        {/* ====> overly on image */}
        <div className="absolute top-0 left-0 w-full h-full bg-main-brand/20"></div>
      </div>
    </Wrapper>
  );
}

export default Home;
>>>>>>> f790907cb8f963d0c1e4b426693fa5490f9d4d7c
