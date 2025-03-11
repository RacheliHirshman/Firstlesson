import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewProduct from './Components/NewProduct'
import AllProducts from './Components/Allproducts'
import Summary from './Components/Summary'

function App() {

  const [products, setproducts] = useState([
    { id: 1, name: "milk", price: 6},
    { id: 2, name: "bread", price: 7  }
  ]);

  const addproduct = (name,price) => {
    setproducts([...products, { id: Date.now(), name: name, price:price }]);
  }

  const deleteProduct = (id) => {
    setproducts(products.filter(p => p.id !== id));
  }

  return (
    <>
    <div>hello racheli </div>
  <NewProduct AddItemFunc={addproduct} ></NewProduct>
  <AllProducts productsArr={products} deleteProduct={deleteProduct}/>
  <Summary productsList={products}/>
  
    </>
  )
}

export default App;
