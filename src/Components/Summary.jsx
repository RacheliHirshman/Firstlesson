
const Summary = ({ productsList }) => {
    let totalAmount = 0;


    productsList.forEach((product) => {
        totalAmount = product.price + totalAmount; 
    });

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Total Amount to Pay: {totalAmount}</p>
        </div>
    );
};

export default Summary;

