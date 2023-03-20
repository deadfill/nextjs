import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";

export default function Footer({
  appearance,
  children,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}
