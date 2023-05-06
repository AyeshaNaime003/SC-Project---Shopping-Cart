import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
// import { Payment } from "./pages/Payment"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"


function App() {
  return(
    // Routing
    <ShoppingCartProvider>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/store' element={<Store/>}/>
          {/* <Route path='/payment' element={<Payment/>}/> */}
        </Routes>
    </ShoppingCartProvider>
  )
}

export default App
