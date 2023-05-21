import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapper";
import LargeText from "@/components/shared/CustomTypography/LargeText";
import SizeButton from "@/components/ProductDetail/SizeButton";

const ProductDetail = () => {
  //Product Description Line Clamp
  const [descriptionClamp, setDescriptionClamp] = useState<boolean>(true);

  //Product Quantity
  const [productCount, setProductCount] = useState<number>(1);

  //   Descrease product count handler
  const handleDescreaseProductCount: () => void = () => {
    productCount > 0 ? setProductCount((o) => o - 1) : setProductCount(0);
  };

  //   Increase product count handler
  const handleIncreaseProductCount: () => void = () => {
    setProductCount((o) => o + 1);
  };

  //Product Description
  const productDescription: string =
    "Feast your eyes on vibrant details with the FHD+ Super AMOLED display, reaching 800 nits¹ for clarity even in bright daylight. Eye Comfort Shield² lowers blue light, and Real Smooth keeps the view smooth, whether you're gaming or scrolling. All on the expansive 6.5-inch Infinity-O Display. Galaxy A52 seen from the front. A scene of a man standing on a beach at sunset with pink and blue colors in the sky expands outside of the boundaries of the display. Text says Brightness 800 nits, Eye Comfort Shield, with the SGS logo and Real Smooth.";

  //Image Gallery data
  const images = [
    {
      original: "/Assets/home/shirt2.jpg",
      thumbnail: "/Assets/home/shirt2.jpg",
    },
    {
      original: "/Assets/home/shirt3.webp",
      thumbnail: "/Assets/home/shirt3.webp",
    },
    {
      original: "/Assets/home/shirt4.jpg",
      thumbnail: "/Assets/home/shirt4.jpg",
    },
  ];

  return (
    <Wrapper style="py-16">
      <div className="w-full h-full flex items-center justify-center flex-col">
        <div className="w-full h-full  flex items-start justify-center">
          <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Coloumn 1 => Product Image gallery */}
            <div className="w-full h-[500px] flex flex-col items-start justify-start relative">
              <ImageGallery
                items={images}
                showNav={false}
                thumbnailPosition={"left"}
                showFullscreenButton={false}
                showPlayButton={false}
              />
              {/* Label => Off on the product  */}
              <div className="w-[60px] sm:w-[85px] h-[60px] sm:h-[85px] bg-lightningYellow flex items-center justify-center rounded-full text-black text-base sm:text-xl font-medium absolute top-[3%] left-[2%]">
                -10%
              </div>
            </div>
            {/* Coloumn 2 => Product Details  */}
            <div className="w-full flex flex-col items-start justify-start gap-6">
              {/* Company Name + Product Title + Product Rating  */}
              <div className="w-full flex flex-col items-start justify-start gap-6">
                <p className="font-inter font-[400] text-black-main sm:text-[26px] text-[20px]">
                  BASIC MAROON SWEATSHIRT
                </p>

                {/* Price  */}
                <h3 className="w-full text-left text-2xl leading-[30px] text-lavaRed font-bold">
                  $33.00
                </h3>
              </div>
              {/* select size */}
              <div className="w-full flex flex-col items-start justify-center">
                <p className="font-inter font-[400] text-[15px] text-gray-400">
                  Select Size
                </p>
                <div className="w-full flex items-center justify-start gap-4">
                  <SizeButton size="S" state={false} setState={() => {}} />
                  <SizeButton size="M" state={true} setState={() => {}} />
                  <SizeButton size="L" state={false} setState={() => {}} />
                  <SizeButton size="XL" state={false} setState={() => {}} />
                </div>
              </div>
            
              {/* Product Count Increment / Decrement  + Wishlist + Add to cart button  */}
              <div className="w-full flex items-center justify-start gap-2 xs:gap-3">
                {/* Incerment / Decrement Button + Wishlist + Add to Cart  */}
                <div className="h-[46px] border-[1px] border-solid border-qgray-border px-4 text-black-cool text-xl flex items-center justify-center gap-5">
                  <button
                    onClick={handleDescreaseProductCount}
                    className="bg-transparent border-none text-2xl font-medium cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold text-black-main">
                    {productCount < 0 ? 0 : productCount}
                  </span>
                  <button
                    onClick={handleIncreaseProductCount}
                    className="bg-transparent border-none font-medium cursor-pointer"
                  >
                    +
                  </button>
                </div>
                {/* Add to widhlist icon button  */}

                {/* Add to cart button  */}
                <button className="flex-1 text-base text-white-main font-semibold text-center bg-black-main h-[46px] cursor-pointer capitalize">
                  Add to cart
                </button>
              </div>
              {/* Product Category + Product SKU  */}
              <div className="w-full flex flex-col items-start justify-start gap-2">
                <p className="text-left text-black-main text-sm font-medium">
                  Category :{" "}
                  <span className="text-black-off font-normal">Mobile</span>
                </p>
                <p className="text-left text-black-main text-sm font-medium">
                  SKU :{" "}
                  <span className="text-black-main font-normal">
                    bigshop12993452
                  </span>
                </p>
              </div>
              {/* Social Links  */}
              <div className="w-full flex items-center justify-start gap-5">
                <p className="text-left text-sm font-normal ">Share This</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductDetail;
