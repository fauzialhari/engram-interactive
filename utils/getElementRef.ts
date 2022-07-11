import { RefObject } from "react";
export default function getElement(RefElement: RefObject<HTMLElement>){
    if (!!RefElement.current) {
        return RefElement.current
    }
    throw new Error("Cannot find ELement " + RefElement);
}