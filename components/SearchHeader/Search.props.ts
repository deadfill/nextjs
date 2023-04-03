import { DetailedHTMLProps, Dispatch, InputHTMLAttributes, SetStateAction } from "react";

export interface SearchProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    minLength: number
    opened: boolean
    setOpened: Dispatch<SetStateAction<boolean>>

}