import { MenuBurgerProps } from "./MenuBurger.props";
import styles from "./MenuBurger.module.css";
import clsx from "clsx";
import { useState } from "react";

const menuItem = [
  {
    name: "Автоэлектрика",
    children: [
      {
        name: "Стеклоочистители и комплектующие",
        children: [
          { name: "Стеклоочистители" },
          { name: "электродвигатели с дополнительным насосом" },
        ],
      },
      { name: "Генераторы" },
      { name: "Светотехника" },
    ],
  },
  {
    name: "Aimpuls",
    children: [
      {
        name: "123",
        children: [
          { name: "456" },
          { name: "электродвигатели с дополнительным насосом" },
        ],
      },
      { name: "Генераторы" },
      { name: "Светотехника" },
    ],
  },
  { name: "Новинки" },
  { name: "Автозапчасти к технике" },
  { name: "Комплектующие" },
];

export default function MenuBurger({
  level,
  setLevel,
  setOpened,
  opened,
  children,
  ...props
}: MenuBurgerProps): JSX.Element {
  const [menuLevel2, setMenuLevel2] = useState([]);
  const [render, setRender] = useState(false);
  const [title, setTitle] = useState("");

  const closeMenu = () => {
    setOpened(false), setLevel(1);
  };

  const menuLevel = (item: any) => {
    setLevel(2);
    setRender(true);
    setTitle(item.name);
    if (item.children) {
      setMenuLevel2(item.children);
    }
  };

  console.log(menuLevel2);

  return (
    <nav className={styles.nav} {...props}>
      <div
        onClick={closeMenu}
        className={clsx(styles.cover, {
          [styles.coverShow]: opened,
        })}
      />
      <div
        className={clsx(styles.menu, {
          [styles.menuShow]: opened,
        })}
      >
        {menuItem.map((item, i) => {
          if (!item.children) {
            return (
              <a key={i} href="">
                {item.name}
              </a>
            );
          }
          return (
            <button key={i} onMouseOver={() => menuLevel(item)}>
              {item.name}
            </button>
          );
        })}
      </div>
      <div
        className={clsx(styles.menuLevel2, {
          [styles.menuLevel2Show]: level === 2 && opened,
        })}
      >
        <h3>{title}</h3>
        {render
          ? menuLevel2.map((item, i) => {
              return <button key={i}>{item.name}</button>;
            })
          : null}
      </div>
    </nav>
  );
}
