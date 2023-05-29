import React, { useState } from "react";
import MuiDropdown from "@/components/shared/DropDown/MuiDropdown";
import TableGrid from "@/components/shared/TableGrid/TableGrid";
import ProductRow from "@/components/Admin/Rows/ProductRow";


const Products = () => {
  const [search, setSearch] = useState("");

  // state to pagination
  const [page, setPage] = useState<{
    unshippedPage: number;
    shippedPage: number;
  }>({
    unshippedPage: 1,
    shippedPage: 1,
  });
  //  handle pagination
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage({ ...page, unshippedPage: value });
  };

  //  ======> add-new-products input values
  const [Inputs, setInputs] = useState({
    choseCategory: "mobileDevices",
    category: "",
    ProductName: "",
    Stock: "",
    Price: "",
  });

  const InputChange = (evt: any) => {
    const value = evt.target.value;
    setInputs({
      ...Inputs,
      [evt.target.name]: value,
    });
  };

  //   console.log(Inputs.choseCategory);

  return (
    <React.Fragment>
      <div className="w-full flex flex-col items-start justify-center gap-[20px] bg-[#F7F7F7] p-4 rounded-[5px] Shadow">
        {/* ======> add product + select category button */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          <button className="w-[150px] h-[44px] hover:opacity-80 bg-black-main text-white-main rounded-[5px]  font-medium">
            Add a Product
          </button>
          <div className="w-[200px]">
            <MuiDropdown
              value={Inputs.choseCategory}
              InputChange={(e: any) => {
                setInputs({
                  ...Inputs,
                  choseCategory: e.target.value,
                });
              }}
              DropdownItem={ProductCategory}
              placeholder="select a category"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 justify-center items-center">
          {/* ======> Specific category statistics */}
          <TableGrid
            Title="Product Category"
            TableHeaders={[
              "item",
              "date",
              "stock",
              "price",
              "qty sold",
              "new",
              "sale",
              "edit",
            ]}
            GridCols="grid-cols-[1.5fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr]"
            State={search}
            SetState={(e: any) => setSearch(e.target.value)}
            Pages={8}
            CurrentPage={1}
            OnPageChange={handlePageChange}
          >
            <div className="w-full min-w-[500px] h-[calc(100vh-320px)] overflow-auto HideScroll">
              {mobileDevices.map((item, index) => {
                return (
                  <ProductRow
                    key={index}
                    name={item.item}
                    pic={item.image}
                    stock={item.stock}
                    price={item.price}
                    newProduct={item.new}
                    qtySold={item.qtySold}
                    date={item.date}
                    sale={item.sale}
                  />
                );
              })}
            </div>
          </TableGrid>
        </div>
      </div>
    </React.Fragment>
  );
};

const ProductCategory = [
  {
    name: "MobileDevices",
    value: "mobileDevices",
  },
  {
    name: "Wearables",
    value: "wearables",
  },
  {
    name: "Computers",
    value: "computer",
  },
];

const mobileDevices = [
  {
    id: 1,
    item: "Product 1",
    image: "/Assets/home/Shirt.jpg",
    stock: 10,
    price: 20,
    qtySold: 5,
    new: false,
    sale: 20,
    date: "07/03/2022",
  },
  {
    id: 1,
    item: "Product 1",
    image: "/Assets/home/Shirt.jpg",
    stock: 0,
    price: 20,
    qtySold: 5,
    new: true,
    sale: 20,
    date: "07/03/2022",
  },
  {
    id: 1,
    item: "Product 1",
    image: "/Assets/home/Shirt.jpg",
    stock: 10,
    price: 20,
    qtySold: 5,
    new: true,
    sale: 20,
    date: "07/03/2022",
  },
  {
    id: 1,
    item: "Product 1",
    image: "/Assets/home/Shirt.jpg",
    stock: 0,
    price: 20,
    qtySold: 5,
    new: false,
    sale: 20,
    date: "07/03/2022",
  },
  {
    id: 1,
    item: "Product 1",
    image: "/Assets/home/Shirt.jpg",
    stock: 10,
    price: 20,
    qtySold: 5,
    new: true,
    sale: 20,
    date: "07/03/2022",
  },
  {
    id: 1,
    item: "Product 1",
    image: "/Assets/home/Shirt.jpg",
    stock: 0,
    price: 20,
    qtySold: 5,
    new: false,
    sale: 20,
    date: "07/03/2022",
  },
  {
    id: 1,
    item: "Product 1",
    image: "/Assets/home/Shirt.jpg",
    stock: 10,
    price: 20,
    qtySold: 5,
    new: true,
    sale: 20,
    date: "07/03/2022",
  },
  {
    id: 1,
    item: "Product 1",
    image: "/Assets/home/Shirt.jpg",
    stock: 10,
    price: 20,
    qtySold: 5,
    new: true,
    sale: 20,
    date: "07/03/2022",
  },
  {
    id: 1,
    item: "Product 1",
    image: "/Assets/home/Shirt.jpg",
    stock: 10,
    price: 20,
    qtySold: 5,
    new: false,
    sale: 20,
    date: "07/03/2022",
  },
  {
    id: 1,
    item: "Product 1",
    image: "/Assets/home/Shirt.jpg",
    stock: 0,
    price: 20,
    qtySold: 5,
    new: true,
    sale: 20,
    date: "07/03/2022",
  },
  {
    id: 1,
    item: "Product 1",
    image: "/Assets/home/Shirt.jpg",
    stock: 10,
    price: 20,
    qtySold: 5,
    new: true,
    sale: 20,
    date: "07/03/2022",
  },
  {
    id: 1,
    item: "Product 1",
    image: "/Assets/home/Shirt.jpg",
    stock: 0,
    price: 20,
    qtySold: 5,
    new: false,
    sale: 20,
    date: "07/03/2022",
  },
  {
    id: 1,
    item: "Product 1",
    image: "/Assets/home/Shirt.jpg",
    stock: 10,
    price: 20,
    qtySold: 5,
    new: true,
    sale: 20,
    date: "07/03/2022",
  },
  {
    id: 1,
    item: "Product 1",
    image: "/Assets/home/Shirt.jpg",
    stock: 0,
    price: 20,
    qtySold: 5,
    new: false,
    sale: 20,
    date: "07/03/2022",
  },
  {
    id: 1,
    item: "Product 1",
    image: "/Assets/home/Shirt.jpg",
    stock: 10,
    price: 20,
    qtySold: 5,
    new: true,
    sale: 20,
    date: "07/03/2022",
  },
  {
    id: 1,
    item: "Product 1",
    image: "/Assets/home/Shirt.jpg",
    stock: 10,
    price: 20,
    qtySold: 5,
    new: true,
    sale: 20,
    date: "07/03/2022",
  },
];

export default Products;
