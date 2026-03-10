import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/api/product/products")
    setProducts(response.data)
  }

  useEffect(() => {
    fetchData();
    console.log(products);
  }, []);

  return (
    <>
      <h1 className="font-bold">Produtos</h1>
      <br />
      <ul>
        {products.map(product => (
          <li
            key={product.id}
            className="font-mono text-xl">
              {product.name}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
