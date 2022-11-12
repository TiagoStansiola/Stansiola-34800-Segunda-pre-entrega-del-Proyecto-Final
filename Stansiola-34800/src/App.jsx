import Nav from './componentes/Nav';
import ListaProductos from './componentes/ListaProductos/ListaProductos';
import Cart from './Pages/Cart/Cart';
import React from 'react';
import HomeContainer from './Pages/HomeContainer/HomeContainer';
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
import Contact from './Pages/Contact/Contact';
import ContenedorDetalle from './Pages/ContenedorDetalle/ContenedorDetalle';

import { CartContext } from './context/cartContext';

function App() {
  return (
    <BrowserRouter>

    <CartContext.Provider value={{

    }}>

    <Nav/>
    <Routes>
    <Route path='/cart'  element={<Cart />}/>

    <Route path='/producto' element={<ListaProductos/>}/>

    <Route path='/detail/:productId' element={<ContenedorDetalle />} />


    <Route path='/contact' element={<Contact/>}/>
    <Route path='/' element={<HomeContainer greeting={"Bienvenido al Sitio"}/>}/>

    <Route path='*' element={<Navigate to='/'/>}/>
    
    </Routes>
    
    </CartContext.Provider>
    </BrowserRouter>
  )
}

export default App
