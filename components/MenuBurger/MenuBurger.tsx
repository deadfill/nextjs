import { MenuBurgerProps } from "./MenuBurger.props";
import styles from "./MenuBurger.module.css";
import clsx from "clsx";

export default function MenuBurger({
  setOpened,
  opened,
  ...props
}: MenuBurgerProps): JSX.Element {
  return (
    <nav className={styles.nav} {...props}>
      <div
        onClick={() => setOpened(false)}
        className={clsx(styles.cover, {
          [styles.coverShow]: opened,
        })}
      />
      <div
        className={clsx(styles.menu, {
          [styles.menuShow]: opened,
        })}
      ></div>
    </nav>
  );
}
