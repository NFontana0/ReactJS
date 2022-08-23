import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';

function App() {

  function alertInicio() {
    alert("Bienvenidos!");
  }

  return (
    <div className="App">
      <NavBar />

      <ItemListContainer alertInicio={alertInicio} />

      <div>
        <h1>Keki Lombo React</h1>
        <p>Ke ago aka?</p>
        <p>No lo c vroh</p>
      </div>

      <Footer />

    </div>
  );
}

export default App;
