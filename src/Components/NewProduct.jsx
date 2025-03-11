import { useState } from "react";

const NewProduct = ({AddItemFunc}) => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        AddItemFunc(name,price);
        setName("");

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
                <br></br>
                <input type="text" placeholder="price" value={price} onChange={(e) => setPrice(Number(e.target.value))}/>
                <br></br>
                <button type="submit">Add</button>
            </form>
        </div>
    )
};

export default NewProduct;