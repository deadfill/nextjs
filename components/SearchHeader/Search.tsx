import { SearchProps } from "./Search.props";
import styles from "./Search.module.css";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { setClose } from "../../redux/slices/menuSlice";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Search({
  children,
  setOpened,
  opened,
  ...props
}: SearchProps): JSX.Element {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const dispatch = useDispatch();

  useEffect(() => setQuery(""), [router.asPath]);

  const openSearch = () => {
    setOpened(true);
    dispatch(setClose());
  };

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    setOpened(false);
    setQuery("");
    router.push(`/search?q=${query}`);
  };
  return (
    <>
      <div className={styles.wrapper}>
        <form onSubmit={handleSearchSubmit}>
          <input
            required
            value={query}
            onClick={openSearch}
            className={clsx(styles.seacrhInput, {
              [styles.seacrhInputShow]: opened,
            })}
            {...props}
            placeholder="Я ищу"
            onChange={(e) => setQuery(e.target.value)}
          ></input>
        </form>

        <div
          onClick={() => setOpened(false)}
          className={clsx(styles.cover, {
            [styles.coverShow]: opened,
          })}
        />
        {/* <div
          className={clsx(styles.serchModal, {
            [styles.serchModalShow]: opened,
          })}
        ></div> */}
      </div>
    </>
  );
}
