import { RefObject } from "react";
export default function getElement(RefElement: RefObject<HTMLElement>){
    if (RefElement.current !== null) {
        return RefElement.current
    }
    throw new Error("Cannot find ELement " + RefElement);
}