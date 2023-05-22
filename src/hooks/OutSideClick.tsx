import React, { useRef, useEffect, ReactNode } from "react";

interface Props {
    children?: ReactNode;
    style?: string;
    Event: () => void
}

export default function OutSideClick({ children, style = "w-full relative", Event }: Props) {
    function useOutsideAlerter(ref: any) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    Event()
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    return <div className={`${style}`} ref={wrapperRef}>{children}</div>;
}