import {BrowserRouter, Route,Routes} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import ProductList from './pages/ProductList'
import MainPage from './pages/mainPage'

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
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route path='/Produtos' element={<ProductList></ProductList>}></Route>
        </Routes>
        </BrowserRouter>
      <br />
   
    </>
  )
}

export default App
