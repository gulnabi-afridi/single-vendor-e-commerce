import React, { useState } from "react";
import CategoryRow from "@/components/Admin/Rows/CategoryRow";
import DashboardDialougeWrapper from "@/components/shared/DialogueWrapper/DashboardDialougeWrapper";
import SampleButton from "@/components/shared/Button/SampleButton";
import InputField from "../../src/components/shared/Inputs/TextInput";

const Category = () => {
  const [addCategoryDialouge, setAddCategoryDialogue] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [dummyDetails, setDummyDetails] = useState({
    name: "Switters",
    products: 21,
  });
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDummyDetails({ ...dummyDetails, [name]: value });
  };
  return (
    <div className="w-full h-full font-inter">
      <div className="w-full h-full border-[1px] bg-[#F7F7F7] rounded-[5px] Shadow">
        <div className="w-full h-[60px] flex items-center justify-between border-b-[1px] px-4">
          <p className="text-[20px] text-black-main capitalize  font-medium">
            All categories
          </p>
          <button
            onClick={() => setAddCategoryDialogue(true)}
            className="w-[150px] h-[36px] hover:opacity-80 bg-black-main text-white-main text-[15px] rounded-[5px] font-medium"
          >
            Add a Category
          </button>
        </div>

        <div className="w-full grid grid-cols-[1fr,1fr,.3fr] border-b-[1px] px-4">
          {/* => 1 category name */}
          <p className="capitalize text-[16px] flex font-medium justify-start items-center text-black-main font-inter h-[44px]">
            category name
          </p>
          {/* 2  date */}
          <p className="capitalize text-[16px] flex font-medium justify-start items-center text-black-main font-inter h-[44px]">
            date
          </p>
          {/* 3) action */}
          <p className="capitalize text-[16px] flex font-medium justify-start items-center text-black-main font-inter h-[44px]">
            action
          </p>
        </div>
        {/* ===> categories row */}

        <div className="w-full h-[calc(100%-120px)] overflow-auto HideScroll px-4">
          {productCategory.map((item, index) => {
            return (
              <CategoryRow
                key={index}
                name={item.name}
                date={item.date}
                showDetail={() => setShowDetails(true)}
              />
            );
          })}
        </div>
      </div>
      {/* Add new Category Dialouge */}
      <DashboardDialougeWrapper
        Open={addCategoryDialouge}
        CloseEvent={() => setAddCategoryDialogue(false)}
        Title="Add a new Category"
        style=" xs:w-full"
      >
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setAddCategoryDialogue(false);
          }}
        >
          <InputField
            Name="Category Name"
            state={newCategory}
            SetState={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewCategory(e.target.value)
            }
            Type="text"
            label="Category Name"
            placeholder="Enter New Category here"
            Multiline={false}
            IsCompulsory={true}
          />
          {/* footer */}
          <div className="w-full flex sm:flex-row flex-col-reverse justify-end items-center gap-4 mt-6">
            <SampleButton
              typeOf="button"
              title="Cancel"
              event={() => setAddCategoryDialogue(false)}
              styles="bg-red-main w-[120px]"
            />

            <SampleButton title="Add Category" typeOf="submit" />
          </div>
        </form>
      </DashboardDialougeWrapper>

      {/* Edit existing Category Dialouge */}
      <DashboardDialougeWrapper
        Open={showDetails}
        CloseEvent={() => setShowDetails(false)}
        Title="Edit Category"
        style=" xs:w-full"
      >
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setShowDetails(false);
          }}
        >
          <div className="w-full flex flex-col items-center justify-center gap-8">
            <InputField
              Name="name"
              state={dummyDetails.name}
              SetState={handleInputs}
              Type="text"
              label="Category Name"
              placeholder="Enter Category Name here"
              Multiline={false}
              IsCompulsory={true}
            />
            <InputField
              Name="products"
              state={dummyDetails.products}
              SetState={handleInputs}
              Type="number"
              label="Total Available Products"
              placeholder="Enter Available Products Here"
              Multiline={false}
              IsCompulsory={true}
            />
          </div>

          {/* footer */}
          <div className="w-full flex sm:flex-row flex-col-reverse justify-end items-center gap-4 mt-6">
            <SampleButton
              typeOf="button"
              title="Cancel"
              event={() => setShowDetails(false)}
              styles="bg-red-main w-[120px]"
            />

            <SampleButton title="Save" typeOf="submit" />
          </div>
        </form>
      </DashboardDialougeWrapper>
    </div>
  );
};

const productCategory = [
  {
    name: "t-shirts",
    date: "28.04.2021",
  },
  {
    name: "switters",
    date: "28.04.2021",
  },
  {
    name: "polo shirts",
    date: "28.04.2021",
  },
  {
    name: "henley shirts",
    date: "28.04.2021",
  },
  {
    name: "t-shirts",
    date: "28.04.2021",
  },
  {
    name: "switters",
    date: "28.04.2021",
  },
  {
    name: "polo shirts",
    date: "28.04.2021",
  },
  {
    name: "henley shirts",
    date: "28.04.2021",
  },
  {
    name: "henley shirts",
    date: "28.04.2021",
  },
  {
    name: "henley shirts",
    date: "28.04.2021",
  },
  {
    name: "henley shirts",
    date: "28.04.2021",
  },
  {
    name: "henley shirts",
    date: "28.04.2021",
  },
  {
    name: "henley shirts",
    date: "28.04.2021",
  },
  {
    name: "henley shirts",
    date: "28.04.2021",
  },
  {
    name: "henley shirts",
    date: "28.04.2021",
  },
];

export default Category;
