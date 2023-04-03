import router from "next/router";
import ButtonCatalog from "../../../components/ButtonCatalog/ButtonCatalog";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function About(): JSX.Element {
  const { data, error } = useSWR("/api/hello", fetcher);
  console.log(data);
  return (
    <>
      <div>О проекте</div>
      <ButtonCatalog>sdgdfg</ButtonCatalog>
    </>
  );
}
