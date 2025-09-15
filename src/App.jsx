import { Routes } from 'react-router'
import { Route } from 'react-router'
import { Homepage } from './Pages/HomePage'
import { CheckoutPage } from './Pages/CheckoutPage'
import { OrdersPage } from './Pages/OrdersPage'
import './App.css'
import { TrackingPage } from './Pages/TrackingPage'

function App() {
  

  return (
    <Routes>
      <Route path = "/" element={ <Homepage/>}> </Route>
      <Route path = "checkout" element = {<CheckoutPage/>}></Route>
      <Route path='orders' element ={<OrdersPage/>}></Route>
      <Route path='tracking' element= {<TrackingPage/>}></Route>

    </Routes>
   
  )
}

export default App
