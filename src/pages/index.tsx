import { Product } from "@prisma/client";
import News from "../../components/News/News";
import PopularCat from "../../components/PopularCat/PopularCat";
import Slider from "../../components/Slider/Slider";

export default function Home({ data }: { data: Product[] }): JSX.Element {
  return (
    <>
      <Slider />
      <PopularCat />
      <News />
    </>
  );
}
