import { useLoaderData } from "react-router-dom";
import Product from "../components/Product";

function Home() {

  const { products } = useLoaderData();

  return (
    <main className="home dark">
      {products.map((product) => <Product key={product.id} data={product} />)}
    </main>
  );
}

export default Home;