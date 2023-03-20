import { SearchProps } from "./Search.props";
import styles from "./Search.module.css";

export default function Search({
  children,
  ...props
}: SearchProps): JSX.Element {
  return (
    <>
      <input
        className={styles.seacrhInput}
        {...props}
        placeholder="Я ищу"
      ></input>
    </>
  );
}
