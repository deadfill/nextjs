import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProductItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    name: string
    price: string
 }