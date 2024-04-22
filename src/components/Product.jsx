import PropTypes from "prop-types"; 

function Product({data}) {
  return (
    <article>
      <h3>{data.title}</h3>
      <img src={data?.images[0]} />
    </article>
  );
}

Product.propTypes = {
  data: PropTypes.object
};

export default Product;
