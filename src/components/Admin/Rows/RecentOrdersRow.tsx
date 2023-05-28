import React from 'react'
import Image from 'next/image'
import { BsThreeDots } from "react-icons/bs";
interface Props {
    Picture:string;
    Name:string;
    Cancellation:string;
    Products:number;
    Id:number;
    OnClick:any;
}

const RecentOrdersRow:React.FC<Props> = ({Picture,Name,Cancellation,Products,Id,OnClick}:Props) => {
  return (
    <div className="w-full grid grid-cols-[1.5fr,1fr,1fr,1fr,.5fr] min-w-[600px] border-b-[2px] border-gray px-4 py-1">
    <div className="w-full flex items-center justify-start gap-2">
      <div className=" w-[36px]  h-[36px] rounded-full relative">
        <Image
          className="rounded-full"
          src={Picture}
          alt=""
          fill
        />
      </div>
      <p className="font-inter font-semibold text-black-main text-[11px]">
        {Name}
      </p>
    </div>
    {/* Seller Id here */}
    <div className="w-full flex items-center justify-start">
      <p className="font-inter font-medium text-black-main text-[11px]">
       {Id}
      </p>
    </div>
    {/*Products here */}
    <div className="w-full flex items-center justify-start">
      <p className="font-inter font-medium text-black-main text-[11px]">
       {Products}
      </p>
    </div>
    {/* Cancellation here */}
    <div className="w-full flex items-center justify-start">
      <p className="font-inter font-medium text-black-main text-[11px]">
        {Cancellation}
      </p>
    </div>
    <div className="w-full flex items-center justify-start">
      <button
        onClick={OnClick}
        className="h-[24px] w-[24px] flex items-center justify-center text-black-main rounded-[5px] bg-gray"
      >
        <BsThreeDots size={15} />
      </button>
    </div>
  </div>
  )
}

export default RecentOrdersRow