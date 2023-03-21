import styles from "./Header.module.css";
import Logo from "../../public/logo.svg";
import Navbar from "../Navbar/Navbar";
import { HeaderProps } from "./Header.props";
import ButtonMenu from "../ButtonMenu/ButtonMenu";
import Search from "../SearchHeader/Search";

export default function Header({ ...props }: HeaderProps): JSX.Element {
  return (
    <header {...props}>
      <div className={styles.wrapper}>
        <Logo />
        <ButtonMenu appearance="primary">Каталог</ButtonMenu>
        <Search />
        <Navbar />
      </div>
    </header>
  );
}
