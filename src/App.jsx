import { useState } from 'react';

import './App.css';
import RegisterPage from './Pages/RgesterPage';
import LoginPage from './Pages/LoginPage';
import Dashboard from './Pages/Dashboard';
import products from './data.js';
import {BrowserRouter, NavLink, Route ,Routes}from 'react router dom';
import ProductInfo from './Pages/ProductInfo.jsx';
import {ThemeProvider} from './Context/ThemeProvider.jsx';
import Navbar from './Component/Navbar.jsx';
import AuthProvider from './Context/AuthProvider.jsx';

function App() {
  
const [isRegistered, setIsRegister] = useState(false)
  return (
    <>
    <ThemeProvider >
      <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='/register' element={<RegisterPage setIsRegister={setIsRegister}/>}></Route>
          <Route path='/dashboard' element={<Dashboard  products={products} />}></Route>
          <Route path='/dashboard/:ID/*' exact element={<ProductInfo />}>
            
          </Route>
        </Routes>
        </AuthProvider>
      </BrowserRouter>
</ThemeProvider>



    </>
  )
}

export default App
