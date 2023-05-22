import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapper";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineHeart, AiFillHeart, AiFillFacebook } from "react-icons/ai";
import ProductSlider from "@/components/shared/Slider/ProductSLider";
import { Data } from "../../constants/Data/JSON";

const ProductDetail = () => {
  //Product Description Line Clamp
  const [descriptionClamp, setDescriptionClamp] = useState<boolean>(true);
  const [favourite, setFavourite] = useState<boolean>(false);
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
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam rem impedit sit eaque alias error commodi odio at dolore eius? Unde, est. Ipsum iste adipisci ut aliquid. Pariatur, odio est! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quo nostrum voluptatem illum eaque! Quisquam autem eum adipisci culpa quae, debitis dolore sint voluptatibus voluptatum, laboriosam nisi, dolorem officiis cum!";


  return (
    <Wrapper style="py-16">
      <div className="w-full h-full flex items-center justify-center flex-col gap-12">
        <div className="w-full flex items-start justify-center">
          <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Coloumn 1 => Product Image gallery */}
            <div className="w-full h-[300px] sm:h-full hidden md:flex flex-col items-start justify-start relative">
              <ImageGallery
                items={Data.ImageGalleryData}
                showNav={false}
                thumbnailPosition={"left"}
                showFullscreenButton={false}
                showPlayButton={false}
              />
              
            </div>
            <div className="w-full h-full md:hidden flex flex-col items-start justify-start relative">
              <ImageGallery
                items={Data.ImageGalleryData}
                showNav={false}
                thumbnailPosition={"bottom"}
                showFullscreenButton={false}
                showPlayButton={false}
              />
              {/* Label => Off on the product  */}
              
              
            </div>
            {/* Coloumn 2 => Product Details  */}
            <div className="w-full flex flex-col items-start justify-start gap-6">
              {/* Company Name + Product Title + Product Rating  */}
              <div className="w-full flex flex-col items-start justify-start gap-6">
                <p className="font-inter font-[400] text-black-main sm:text-[26px] text-[20px]">
                  BASIC MAROON SWEATSHIRT
                </p>
                <p className="font-inter font-medium text-black-main text-[15px]">
                  Our exclusive printed short sleeves T-shirt designed for
                  premium softness.
                </p>
                {/* Price  */}
                <h3 className="w-full text-left text-2xl leading-[30px] text-lavaRed font-semibold font-inter">
                  $33.00
                </h3>
              </div>
              {/* Product Description  */}
              <div className="w-full flex flex-col items-start justify-start gap-1">
                <p
                  className={`${
                    descriptionClamp && "line-clamp-2"
                  } text-[15px] text-black-main font-inter text-left`}
                >
                  {productDescription}
                </p>
                <button
                  onClick={() => setDescriptionClamp(!descriptionClamp)}
                  className="bg-transparent text-sm font-bold font-inter border-none text-blue-400"
                >
                  See {descriptionClamp ? "More" : "Less"}
                </button>
              </div>
              {/* Product Count Increment / Decrement  + Wishlist + Add to cart button  */}
              <div className="w-full flex items-center justify-start gap-2 xs:gap-3">
                {/* Incerment / Decrement Button + Wishlist + Add to Cart  */}
                <div className="h-[46px] w-[150px] flex items-center justify-center gap-5 text-black-main text-xl hover:border-black-main duration-300 border-[1px] border-solid px-4">
                  <button
                    onClick={handleDescreaseProductCount}
                    className="bg-transparent border-none text-2xl font-medium font-inter cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-[16px] font-semibold font-inter text-black-main">
                    {productCount < 0 ? 0 : productCount}
                  </span>
                  <button
                    onClick={handleIncreaseProductCount}
                    className="bg-transparent border-none font-medium font-inter cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Add to cart button  */}
                <button className=" h-[46px] w-full flex items-center justify-center gap-2 relative text-[16px] text-white-main font-semibold font-inter before:absolute before:bg-black-main before:top-0 before:left-0 before:h-full before:-z-10 z-10 before:w-0 hover:before:w-full before:transition-all before:duration-500 ease-in-out bg-main-secondary cursor-pointer capitalize">
                  <HiOutlineShoppingBag className="text-[24px]" /> Add to cart
                </button>
                <button
                  onClick={() => setFavourite((prevvalue) => !prevvalue)}
                  className={`h-[46px] w-[100px] border-[1px] border-solid px-4 text-black-cool text-[22px] flex items-center justify-center gap-5 hover:border-black-main duration-300 ${
                    favourite && "border-black-main"
                  }`}
                >
                  {favourite ? <AiFillHeart /> : <AiOutlineHeart />}
                </button>
              </div>
              {/* Product Category + Product SKU  */}
              <div className="w-full flex border-t border-b items-start justify-start gap-6 py-4">
                <p className="text-left text-black-main text-[14px] font-medium font-inter">
                  Category :{" "}
                  <span className="text-black-off text-[14px] font-normal font-inter">
                    Men Wears
                  </span>
                </p>
                <p className="text-left text-black-main text-[14px] font-medium font-inter">
                  SKU :{" "}
                  <span className="text-black-main font-normal text-[14px] font-inter">
                    bigshop12993452
                  </span>
                </p>
              </div>
              {/* Social Links  */}
              <div className="w-full flex items-center justify-start">
                <button
                  className={`h-[30px] w-[130px] flex items-center justify-center gap-4 font-inter font-[400] text-gray-500 text-[14px] hover:text-black-main duration-300`}
                >
                  <AiFillFacebook className="text-[24px]" />
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-8 items-start justify-center border-t border-b py-9">
          <p className="font-inter font-semibold text-black-main text-[26px]">
            Return/Exchange Policy
          </p>
          <div className="w-full px-6">
            <ul className="flex flex-col gap-3">
              <li className="font-inter text-black-main font-[400] text-[15px] leading-[24px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                <span className="font-bold font-inter">
                  Qui ducimus ratione suscipit enim saepe aliquam voluptatum
                  itaque,
                </span>
                asperiores eaque, repudiandae inventore deleniti! Consequatur at
                repellat voluptas a harum id aliquid.
              </li>
              <li className="font-inter text-black-main font-[400] text-[15px] leading-[24px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                assumenda consequuntur cupiditate ab placeat, exercitationem
                deleniti.
              </li>
              <li className="font-inter text-black-main font-[400] text-[15px] leading-[24px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                temporibus!{" "}
                <span className="font-bold font-inter">
                  Ut obcaecati incidunt, cupiditate illo,
                </span>{" "}
                consectetur architecto blanditiis odio
              </li>
              <li className="font-inter text-black-main font-[400] text-[15px] leading-[24px]">
                <span className="font-bold font-inter">Rs.400/-</span> will be
                charged for Hassle-free exchange at your doorstep. (Only in
                major cities)
              </li>
              <li className="font-inter text-black-main font-[400] text-[15px] leading-[24px]">
                Returning items will be returned at{" "}
                <span className="font-bold font-inter">customer’s cost</span> if
                product sent was as per order.
              </li>
            </ul>
          </div>
        </div>
        <ProductSlider title="Related Products" data={Data.RelatedProducts}/>
      </div>
    </Wrapper>
  );
};

export default ProductDetail;
