import { ButtonMenuProps } from "./ButtonMenu.props";
import styles from "./ButtonMenu.module.css";
import clsx from "clsx";
import { useState } from "react";
import MenuBurger from "../MenuBurger/MenuBurger";

export default function Footer({
  appearance,
  children,
  ...props
}: ButtonMenuProps): JSX.Element {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <>
      <button
        className={styles.button}
        {...props}
        onClick={() => setOpened(!opened)}
      >
        <span
          className={clsx(styles.button_top, {
            [styles.opened_top]: opened,
          })}
        ></span>
        <span
          className={clsx(styles.button_mid, {
            [styles.opened_mid]: opened,
          })}
        ></span>
        <span
          className={clsx(styles.button_bot, {
            [styles.opened_bot]: opened,
          })}
        ></span>
        {children}
      </button>
      <MenuBurger setOpened={setOpened} opened={opened} />
    </>
  );
}
