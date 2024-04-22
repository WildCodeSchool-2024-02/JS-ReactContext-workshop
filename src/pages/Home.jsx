import { useLoaderData, useOutletContext } from "react-router-dom";
import Product from "../components/Product";

function Home() {

  const { products } = useLoaderData();
  const { theme } = useOutletContext();

  return (
    <main className={`home ${theme}`}>
      {products.map((product) => <Product key={product.id} data={product} />)}
    </main>
  );
}

export default Home;