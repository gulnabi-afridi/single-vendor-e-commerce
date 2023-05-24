import React from 'react'


interface Props {
    typeOf:"submit"|"button";
    text:string;
    event:any;
    style?:string
}
const Button:React.FC<Props>=({
    typeOf="button",
    text,
    event,
    style="h-[50px] sm:w-[350px] w-full"
})=> {
  return (
    <button
          type={typeOf}
          onClick={event}
          className={`${style} relative text-[16px] text-white-main font-semibold font-inter before:absolute before:bg-black-main before:top-0 before:left-0 before:h-full before:-z-10 z-10 before:w-0 hover:before:w-full before:transition-all before:duration-500 ease-in-out bg-main-secondary cursor-pointer capitalize`}
        >
         {text}
        </button>
  )
}

export default Button