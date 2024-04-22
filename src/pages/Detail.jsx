import { useLoaderData, useOutletContext } from "react-router-dom";
import Product from "../components/Product";

function Detail() {

  const product = useLoaderData();
  const { theme } = useOutletContext();

  return (
    <main className={`detail ${theme}`}>
      <Product data={product} />
    </main>
  );
}

export default Detail;
