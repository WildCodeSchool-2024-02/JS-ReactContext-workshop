import { useLoaderData } from "react-router-dom";
import Product from "../components/Product";

function Detail() {

  const product = useLoaderData();

  return (
    <main className="detail dark">
      <Product data={product} />
    </main>
  );
}

export default Detail;
