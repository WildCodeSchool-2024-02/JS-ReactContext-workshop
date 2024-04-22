import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import Product from "../components/Product";
import themeContext from "../context/theme/context";

function Home() {

  const { products } = useLoaderData();
  const { theme } = useContext(themeContext);

  return (
    <main className={`home ${theme}`}>
      {products.map((product) => <Product key={product.id} data={product} />)}
    </main>
  );
}

export default Home;