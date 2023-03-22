import { ButtonMenuProps } from "./ButtonMenu.props";
import styles from "./ButtonMenu.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";
import MenuBurger from "../MenuBurger/MenuBurger";
import { useRouter } from "next/router";

export default function ButtonMenu({
  appearance,
  children,
  ...props
}: ButtonMenuProps): JSX.Element {
  const [opened, setOpened] = useState<boolean>(false);
  const [level, setLevel] = useState<number>(1);
  const dynamicRoute = useRouter().asPath;

  useEffect(() => setOpened(false), [dynamicRoute]);

  const openMenu = () => {
    setOpened(!opened), setLevel(1);
  };

  return (
    <>
      <button
        className={clsx(styles.button, {
          [styles.button_active]: opened,
        })}
        {...props}
        onClick={openMenu}
      >
        <div className={styles.span}>
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
        </div>
        {children}
      </button>
      <MenuBurger
        children
        setOpened={setOpened}
        opened={opened}
        level={level}
        setLevel={setLevel}
      />
    </>
  );
}
