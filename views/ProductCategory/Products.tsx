import React from "react";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapper";
import ProductCard from "@/components/shared/ProductCards/ProductCard";

function Products() {
  return (
    <Wrapper style="py-10">
      <div className="w-full grid gap-6 gap-y-6 sm:gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {ProductsData.map((item: any, index: number) => {
          return (
            <ProductCard
              key={index}
              picture={item.picture}
              price={item.price}
              title={item.title}
              newArrival={item.new}
              soldout={item.soldOut}
              sale={item.sale}
            />
          );
        })}
      </div>
    </Wrapper>
  );
}

export default Products;

const ProductsData = [
  {
    title: "SLIM FIT PEPPERMINT COTTON TEE",
    price: 33.0,
    new: true,
    soldOut: false,
    picture: "/Assets/home/Shirt.jpg",
  },
  {
    title: "SLIM FIT Black COTTON TEE",
    price: 28.0,
    new: false,
    sale: "20% Off",
    picture: "/Assets/home/shirt2.jpg",
    soldOut: false,
  },
  {
    title: "Dark Cotton Tee",
    price: 450.0,
    new: false,
    sale: "10% Off",
    soldOut: true,
    picture: "/Assets/home/shirt7.jpg",
  },
  {
    title: "Nike Addidas Shoes",
    price: 230.0,
    new: false,
    soldOut: false,
    picture: "/Assets/home/shoes.webp",
  },
  {
    title: "SLIM FIT PEPPERMINT COTTON TEE",
    price: 33.0,
    new: true,
    soldOut: false,
    picture: "/Assets/home/Shirt.jpg",
  },
  {
    title: "SLIM FIT Black COTTON TEE",
    price: 28.0,
    new: false,
    sale: "20% Off",
    picture: "/Assets/home/shirt2.jpg",
    soldOut: false,
  },
  {
    title: "Dark Cotton Tee",
    price: 450.0,
    new: false,
    sale: "10% Off",
    soldOut: true,
    picture: "/Assets/home/shirt7.jpg",
  },
  {
    title: "Nike Addidas Shoes",
    price: 230.0,
    new: false,
    soldOut: false,
    picture: "/Assets/home/shoes.webp",
  },
  {
    title: "Dark Cotton Tee",
    price: 450.0,
    new: false,
    sale: "10% Off",
    soldOut: true,
    picture: "/Assets/home/shirt7.jpg",
  },
  {
    title: "Nike Addidas Shoes",
    price: 230.0,
    new: false,
    soldOut: false,
    picture: "/Assets/home/shoes.webp",
  },
  {
    title: "Dark Cotton Tee",
    price: 450.0,
    new: false,
    sale: "10% Off",
    soldOut: true,
    picture: "/Assets/home/shirt7.jpg",
  },
  {
    title: "Nike Addidas Shoes",
    price: 230.0,
    new: false,
    soldOut: false,
    picture: "/Assets/home/shoes.webp",
  },
  {
    title: "Dark Cotton Tee",
    price: 450.0,
    new: false,
    sale: "10% Off",
    soldOut: true,
    picture: "/Assets/home/shirt7.jpg",
  },
  {
    title: "Nike Addidas Shoes",
    price: 230.0,
    new: false,
    soldOut: false,
    picture: "/Assets/home/shoes.webp",
  },
  {
    title: "Dark Cotton Tee",
    price: 450.0,
    new: false,
    sale: "10% Off",
    soldOut: true,
    picture: "/Assets/home/shirt7.jpg",
  },
  {
    title: "Nike Addidas Shoes",
    price: 230.0,
    new: false,
    soldOut: false,
    picture: "/Assets/home/shoes.webp",
  },
  {
    title: "Dark Cotton Tee",
    price: 450.0,
    new: false,
    sale: "10% Off",
    soldOut: true,
    picture: "/Assets/home/shirt7.jpg",
  },
  {
    title: "Nike Addidas Shoes",
    price: 230.0,
    new: false,
    soldOut: false,
    picture: "/Assets/home/shoes.webp",
  },
  {
    title: "Dark Cotton Tee",
    price: 450.0,
    new: false,
    sale: "10% Off",
    soldOut: true,
    picture: "/Assets/home/shirt7.jpg",
  },
  {
    title: "Nike Addidas Shoes",
    price: 230.0,
    new: false,
    soldOut: false,
    picture: "/Assets/home/shoes.webp",
  },
];
