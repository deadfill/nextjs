import { ButtonHTMLAttributes, DetailedHTMLProps, Dispatch, ReactNode, SetStateAction } from "react";

export interface MenuBurgerProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    setOpened: Dispatch<SetStateAction<boolean>>,
    opened: boolean,
    level: number,
    setLevel: Dispatch<SetStateAction<number>>,
    children: ReactNode
 }