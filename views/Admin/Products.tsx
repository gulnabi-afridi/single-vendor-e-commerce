import React, { useState, useRef } from "react";
import MuiDropdown from "@/components/shared/DropDown/MuiDropdown";
import TableGrid from "@/components/shared/TableGrid/TableGrid";
import ProductRow from "@/components/Admin/Rows/ProductRow";
import DashboardDialougeWrapper from "@/components/shared/DialogueWrapper/DashboardDialougeWrapper";
import { FormControl, MenuItem, InputLabel, Select } from "@mui/material";
import TextInput from "@/components/shared/Inputs/TextInput";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import SampleButton from "@/components/shared/Button/SampleButton";

const Products = () => {
  const [search, setSearch] = useState("");
  const [editProductDialogue, setEditProductDialogue] = useState(false);
  const [addProductDialogue, setAddProductDialogue] = useState(false);
  const [productImages, setProductImages] = useState<File[]>([]);
  const [updateProductImages, setUpdateProductImages] = useState<File[]>([]);

  const newProductRef: any = useRef(null);
  const productEditRef: any = useRef(null);

  const handleNewProductFileChange = (event: any) => {
    const files = event.target.files;
    if (files) {
      const selectedImagesArray: File[] = [...productImages];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.startsWith("image/")) {
          selectedImagesArray.push(file);
        }
      }
      setProductImages(selectedImagesArray);
    }
  };

  const handleEditFileChange = (event: any) => {
    const files = event.target.files;
    if (files) {
      const selectedImagesArray: File[] = [...productImages];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.startsWith("image/")) {
          selectedImagesArray.push(file);
        }
      }
      setUpdateProductImages(selectedImagesArray);
    }
  };

  const handleAddProduct = () => {};
  const handelEditProduct = () => {};

  const deleteProductImage = (img: any) => {
    const updatedImages = productImages.filter((item) => {
      return item.name !== img.name;
    });
    setProductImages(updatedImages);
  };

  // state to pagination
  const [page, setPage] = useState(1);

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

  return (
    <React.Fragment>
      <div className="w-full flex flex-col items-start justify-center gap-[20px] bg-[#F7F7F7] p-4 rounded-[5px] Shadow">
        {/* ======> add product + select category button */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          <button
            onClick={() => setAddProductDialogue(true)}
            className="w-[150px] h-[44px] hover:opacity-80 bg-black-main text-white-main rounded-[5px]  font-medium"
          >
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
            CurrentPage={page}
            OnPageChange={(e: any) => setPage(e.target.value)}
          >
            <div className="w-full min-w-[500px] h-[calc(100vh-320px)] overflow-auto HideScroll">
              {mobileDevices.map((item, index) => {
                return (
                  <ProductRow
                    key={index}
                    event={() => setEditProductDialogue(true)}
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
      {/* ===> dialogue for add product */}
      <DashboardDialougeWrapper
        Open={addProductDialogue}
        CloseEvent={() => setAddProductDialogue(false)}
        Title="Add a new Product"
        style=" xs:w-full"
      >
        <form onSubmit={handleAddProduct}>
          <FormControl
            sx={{
              "& label.Mui-focused": {
                color: "#000000",
              },
            }}
            className="w-full flex flex-col justify-center items-center gap-4"
          >
            {/* =====> select a category */}
            <InputLabel id="demo-simple-select-label">
              Select A Category
            </InputLabel>
            <Select
              sx={{
                width: "100%",
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#000000",
                },
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Inputs.category}
              label="Select a category"
              required
              onChange={(e: any) =>
                setInputs({
                  ...Inputs,
                  category: e.target.value,
                })
              }
            >
              {ProductCategory.map((item, index) => {
                return (
                  <MenuItem key={index} value={item.value}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
            <SampleButton
              typeOf="button"
              title="Upload Product Images"
              event={() => newProductRef.current.click()}
              styles="w-[200px] bg-black-main sm:mt-4 mt-0"
            />

            <input
              className="hidden"
              ref={newProductRef}
              type="file"
              multiple
              accept="image/*"
              onChange={handleNewProductFileChange}
            />
            {productImages.length > 0 && (
              <div className="w-full flex flex-col gap-4">
                <p className="text-[18px] font-semibold font-inter">
                  Product Images
                </p>
                <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {productImages.map((img, index) => {
                    return (
                      <div key={index} className="w-full h-[100px] relative ">
                        <Image
                          src={URL.createObjectURL(img)}
                          className="cover"
                          fill
                          alt=""
                        ></Image>
                        <div className="w-full h-full opacity-0 hover:opacity-100 cursor-pointer flex justify-center items-center hover:bg-black-main/50 absolute left-0 top-0">
                          <AiOutlineDelete
                            onClick={() => deleteProductImage(img)}
                            className=" text-white-main text-[26px]"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <TextInput
              label="Product name"
              placeholder="product name"
              IsCompulsory={true}
              Name="ProductName"
              Type="text"
              state={Inputs.ProductName}
              SetState={InputChange}
            />
            <TextInput
              label="Stock"
              placeholder="Stock"
              Type="number"
              Name="Stock"
              IsCompulsory={true}
              state={Inputs.Stock}
              SetState={InputChange}
            />
            <TextInput
              label="Price"
              placeholder="Price"
              Type="number"
              Name="Price"
              IsCompulsory={true}
              state={Inputs.Price}
              SetState={InputChange}
            />
            <div className="w-full flex sm:flex-row flex-col-reverse justify-end items-center gap-4 mt-6">
              <SampleButton
                typeOf="button"
                title="Cancel"
                event={() => setAddProductDialogue(false)}
                styles="bg-red-main w-[120px]"
              />

              <SampleButton title="Add Product" typeOf="submit" />
            </div>
          </FormControl>
        </form>
      </DashboardDialougeWrapper>
      {/* =====> dialogue for edit product */}

      <DashboardDialougeWrapper
        Open={editProductDialogue}
        CloseEvent={() => setEditProductDialogue(false)}
        Title="Edit your product"
        style=" xs:w-full"
      >
        <div className="w-full flex flex-col gap-4 justify-center items-center">
          <div className="w-full flex justify-center items-center flex-col">
            <div className="w-full grid grid-cols-4 justify-center items-center">
              {updateProductImages?.map((img, index) => {
                return (
                  <div key={index} className="w-full h-[100px] relative ">
                    <Image
                      src={URL.createObjectURL(img)}
                      className="object-contain"
                      fill
                      alt=""
                    />
                    <div className="w-full h-full opacity-0 hover:opacity-100 cursor-pointer flex justify-center items-center hover:bg-black-main/50 absolute left-0 top-0">
                      <AiOutlineDelete
                        onClick={() => {
                          const images = [...updateProductImages];
                          images.pop();
                          setUpdateProductImages(images);
                        }}
                        className=" text-white-main text-[26px]"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            {/* ======> Add more product images button */}
            <SampleButton
              title="Upload Image"
              typeOf="button"
              event={() => productEditRef.current.click()}
              styles={`bg-black-main w-[200px] ${
                updateProductImages.length !== 0 && "mt-8"
              }`}
            />
            <input
              className="hidden"
              ref={productEditRef}
              type="file"
              multiple
              accept="image/*"
              onChange={handleEditFileChange}
            />
          </div>
          <form
            onSubmit={handelEditProduct}
            action=""
            className="w-full flex flex-col gap-4 mt-4"
          >
            {/* =====> product name input */}
            <TextInput
              label="Product name"
              placeholder="Product name"
              Type="text"
              Name="ProductName"
              state={Inputs.ProductName}
              SetState={InputChange}
            />
            {/* ======> stock number */}
            <TextInput
              state={Inputs.Stock}
              Name="Stock"
              SetState={InputChange}
              label="Stock"
              placeholder="Stock"
              Type="number"
            />
            {/* ======> price */}
            <TextInput
              label="Price"
              placeholder="Price"
              Name="Price"
              Type="number"
              state={Inputs.Price}
              SetState={InputChange}
            />
            {/* ======> edit + cancel button */}
            <div className="flex sm:flex-row flex-col-reverse justify-end items-center gap-4 mt-6">
              <SampleButton
                title="Cancel"
                typeOf="button"
                event={() => {
                  setEditProductDialogue(false);
                }}
                styles="w-[120px] bg-red-main"
              />
              <SampleButton
                title="Save"
                typeOf="submit"
                event={handelEditProduct}
                styles="w-[120px] bg-black-main"
              />
            </div>
          </form>
        </div>
      </DashboardDialougeWrapper>
    </React.Fragment>
  );
};

const ProductCategory = [
  {
    name: "t-shirts",
    value: "t shirts",
  },
  {
    name: "polo-t-shirts",
    value: "polo t shirts",
  },
  {
    name: "switters",
    value: "switters",
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
