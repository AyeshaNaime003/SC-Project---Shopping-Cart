import { Route, Routes } from "react-router-dom"
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { Container } from 'react-bootstrap'
import { Navbar } from "./components/Navbar"
import { Signin } from "./pages/Signin"
import { Login } from "./pages/Login"


function App() {
  return(
    // Routing
    <>
      <Navbar/>
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/store' element={<Store/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Container>
    </>
  )
}

export default App
