import { Product } from "@prisma/client";
import { GetServerSideProps } from "next";
import { useSelector } from "react-redux";
import ProductItem from "../../../components/ProductItem/ProductItem";
import { AppState, wrapper } from "../../../redux/store";
import styles from "./Search.module.css";

export const getServerSideProps: GetServerSideProps<{
  data: Product[];
}> = async (context) => {
  const param = context.query.q;
  const res = await fetch(`http://localhost:3000/api/search?q=${param}`);
  const data: Product[] = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default function Search({ data }: { data: Product[] }): JSX.Element {
  const product = useSelector(
    (state: AppState) => state.rootReducer.productSlice.product
  );
  console.log(product);
  const render = data.map((item) => {
    console.log(item);
    return (
      <ProductItem
        key={item.id}
        name={item.name}
        price={item.price}
      ></ProductItem>
    );
  });
  return (
    <div className={styles.wrapper}>
      {data.length == 0 ? <div>Ничего не найдено</div> : render}
    </div>
  );
}
