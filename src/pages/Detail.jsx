import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import Product from "../components/Product";
import themeContext from "../context/theme/context";

function Detail() {

  const product = useLoaderData();
  const { theme } = useContext(themeContext);

  return (
    <main className={`detail ${theme}`}>
      <Product data={product} />
    </main>
  );
}

export default Detail;
