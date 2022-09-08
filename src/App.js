import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import React, {useState, useEffect} from "react"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import FetchContainer from './components/FetchContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  function alertInicio() {
    alert("Bienvenidos!");
  }
  

  return (
<>
      <BrowserRouter>

  { /*Aca van los componenes que estan presentes en todas las rutas*/}
      <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:idcategory' element={<ItemListContainer />} />
          <Route path='/product/:idproduct' element={<ItemDetailContainer />}/>
        </Routes>

  { /*Aca va el footer, tambien afuera de las rutas, porque tambien estan en todas las rutas*/}
      <Footer /> 

      </BrowserRouter>
    
</> 
  );
} 

export default App;
