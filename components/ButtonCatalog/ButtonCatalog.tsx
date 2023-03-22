import { ButtonCatalogProps } from "./ButtonCatalog.props";
import styles from "./ButtonCatalog.module.css";
import Icon from "../../public/icon/catalogIcon/menuCatalog.svg";
import { useState } from "react";
import clsx from "clsx";

export default function ButtonCatalog({
  children,
  ...props
}: ButtonCatalogProps): JSX.Element {
  return (
    <button className={styles.button} {...props}>
      {children}
      <Icon />
    </button>
  );
}
