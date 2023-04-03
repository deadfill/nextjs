import { ProductItemProps } from "./ProductItem.props";
import styles from "./ProductItem.module.css";
import ProductImage from "../../public/productImage.jpg";
import Image from "next/image";

export default function ProductItem({
  name,
  price,
  ...props
}: ProductItemProps): JSX.Element {
  return (
    <div {...props} className={styles.wrapper}>
      <div>
        <Image src={ProductImage} alt={""}></Image>
      </div>
      <div>{name}</div>
      <div>Цена: {price}</div>
    </div>
  );
}
