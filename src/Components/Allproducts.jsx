
import NewProduct from "./NewProduct";
import ShowDetails from "./ShowDetails";

const AllProducts = ({ productsArr ,deleteProduct}) => {

    return (
<div>
    <p>product data</p>
    <h2>this is a beatiful data</h2>
    <ShowDetails productsArr={productsArr} deleteProduct={deleteProduct}/>
</div>
    );

};

export default AllProducts;