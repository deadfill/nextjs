import { ButtonHTMLAttributes, DetailedHTMLProps, Dispatch, SetStateAction } from "react";

export interface MenuBurgerProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    setOpened: Dispatch<SetStateAction<boolean>>,
    opened: boolean
 }