
import NewProduct from "./NewProduct";
import ShowDetails from "./ShowDetails";

const AllProducts = ({ productsArr ,deleteProduct}) => {

    return (
<div>
    <p>product data</p>
    <h2>this is  nice data</h2>
    <h2>this is  racheli</h2>
    <h2>this is  rutShi</h2>
    <ShowDetails productsArr={productsArr} deleteProduct={deleteProduct}/>
</div>
    );

};

export default AllProducts;