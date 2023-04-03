import { Product } from "@prisma/client";
import { GetServerSideProps } from "next";
import ProductItem from "../../../components/ProductItem/ProductItem";
import { prisma } from "../../../libs/prisma";
import styles from "./Search.module.css";

export const getServerSideProps: GetServerSideProps<{
  data: Product[];
}> = async (context) => {
  const param = context.query.q;
  const data = await prisma.product.findMany({
    where: {
      name: {
        contains: "микро",
        mode: "insensitive",
      },
    },
  });

  return {
    props: {
      data,
    },
  };
};

export default function Search({ data }: { data: Product[] }): JSX.Element {
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
