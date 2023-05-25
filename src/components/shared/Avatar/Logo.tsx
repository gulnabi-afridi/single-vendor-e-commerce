import React from 'react';
import Image from 'next/image';
import { MdModeEdit } from "react-icons/md";


interface props {
    src: string,
    GetImageSource: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Logo({ src, GetImageSource }: props) {
    return (
        <div className="relative">
            <Image
                className="object-cover"
                width={100}
                height={100}
                src={src}
                alt=""
            />
            <label htmlFor='inputTag'
                className="w-[24px] h-[24px] flex rounded-full bg-white-main text-white-main justify-center items-center absolute bottom-2 right-4 border-[1px] border-main-brand cursor-pointer"
            >
                <MdModeEdit size={16} className="text-main-brand cursor-pointer hover:text-black-main/50" />
                <input
                    id='inputTag'
                    type="file"
                    onChange={GetImageSource}
                    className='hidden'
                />
            </label>
        </div>
    )
}

export default Logo