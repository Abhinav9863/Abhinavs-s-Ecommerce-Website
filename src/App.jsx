import { Routes } from 'react-router'
import { Route } from 'react-router'
import axios from 'axios'
import { useState } from 'react'
import { Homepage } from './Pages/home/HomePage'
import { CheckoutPage } from './Pages/checkout/CheckoutPage'
import { OrdersPage } from './Pages/orders/OrdersPage'
import './App.css'
import { TrackingPage } from './Pages/TrackingPage'
import { useEffect } from 'react'

function App() {
    const [cart , setCart] = useState([]);

      useEffect(() => {
      axios.get("/api/cart-items?expand=product")
        .then((response) => {
          setCart(response.data)
        });

      }, []);

  return (
    <Routes>
      <Route path = "/" element={ <Homepage  cart = {cart}/>}> </Route>
      <Route path = "checkout" element = {<CheckoutPage cart = {cart}/>}></Route>
      <Route path='orders' element={<OrdersPage cart={cart} />} />
      <Route path='tracking' element= {<TrackingPage/>}></Route>

    </Routes>
   
  )
}

export default App
