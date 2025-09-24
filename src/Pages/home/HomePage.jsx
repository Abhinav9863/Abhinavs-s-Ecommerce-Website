import axios  from 'axios';
import {  useEffect , useState } from 'react';
import { Header } from "../../components/Header";
import "./Homepage.css";
import { ProductsGrid } from './ProductsGrid';


export function Homepage({cart}) {

  const [products , setProducts] = useState([]);
 

  useEffect(() => {
      const getHomeData = async() => {
              const response = await axios.get("/api/products")

            setProducts(response.data)
      }
   

      getHomeData();

  }, [])


  return (
    <>
      <title>Abhinav's Ecommerce Website</title>
      <Header  cart= {cart}/>
      <div className="home-page">
      <ProductsGrid products = {products}/>
      </div>
    </>
  );
}


