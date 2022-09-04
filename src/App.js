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

function App() {

  function alertInicio() {
    alert("Bienvenidos!");
  }

  let producto1 = { stock: 10, initial: 0};

  const [carrito, setCarrito] = useState (producto1.initial);

  function onAdd() {
  }
  

  return (
    <div className="App">
      <NavBar carrito={carrito} />
      
      {/*<FetchContainer />

      <ItemListContainer />*/}

      <ItemDetailContainer />

      {/* <ItemCount item={producto1} onAdd={onAdd} carrito={carrito} setCarrito={setCarrito}  />

    <Footer /> */}

    </div>
  );
}

export default App;
