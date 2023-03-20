import styles from "./Header.module.css";
import Logo from "../../public/logo.svg";
import Navbar from "../Navbar/Navbar";
import { HeaderProps } from "./Header.props";
import ButtonSvg from "../../public/icon/headerIcon/menuSvg.svg";
import Button from "../Button/Button";
import Search from "../SearchHeader/Search";

export default function Header({ ...props }: HeaderProps): JSX.Element {
  return (
    <header {...props}>
      <div className={styles.wrapper}>
        <Logo />
        <Button appearance="primary">
          <ButtonSvg />
          Каталог
        </Button>
        <Search />
        <Navbar />
      </div>
    </header>
  );
}
