
import NewProduct from "./NewProduct";
import ShowDetails from "./ShowDetails";

const AllProducts = ({ productsArr ,deleteProduct}) => {

    return (
<div>
    <p>product data</p>
    <ShowDetails productsArr={productsArr} deleteProduct={deleteProduct}/>
</div>
    );

};

export default AllProducts;