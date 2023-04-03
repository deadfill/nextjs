import styles from "./Header.module.css";
import Logo from "../../public/logo.svg";
import Navbar from "../Navbar/Navbar";
import { HeaderProps } from "./Header.props";
import ButtonMenu from "../ButtonMenu/ButtonMenu";
import Search from "../SearchHeader/Search";
import { useState } from "react";
import Link from "next/link";

export default function Header({ ...props }: HeaderProps): JSX.Element {
  const [opened, setOpened] = useState(false);

  return (
    <header {...props}>
      <div className={styles.wrapper}>
        <Link href={"/"}>
          <Logo />
        </Link>
        <ButtonMenu appearance="primary">Каталог</ButtonMenu>
        <Search opened={opened} setOpened={setOpened}></Search>
        <Navbar />
      </div>
    </header>
  );
}
