import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();
  return <p>This is a {id} Product Details page.</p>;
};

export default ProductDetailsPage;
