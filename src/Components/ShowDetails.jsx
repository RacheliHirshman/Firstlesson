const ShowDetails=({productsArr,deleteProduct})=>{
    return(
      <div>
        {productsArr.length && productsArr.map((product, index) =>
            <div key={index} style={{ border: '1px solid #000', padding: '10px', margin: '5px' }}>
                <br />
                <span>name: {product.name}</span>
                <br />
                <span>price: {product.price}</span>
                <br />
                <button onClick={() => deleteProduct(product.id)}>delete</button>
            </div>
        )}
        </div>
    )
};
export default ShowDetails;