import React from 'react';
import { Provider } from 'react-redux'; //El provider es el que engloba todo el app, acordarse y asi se importa
import EquipoSeleccionado from './components/EquipoSeleccionado';
import Jugadores from './components/Jugadores';
import store from './store'; //Asi importamos nuestra store y la agregamos al Provider
import "./styles/styles.scss";
import ArmaTuEquipo from './images/arma_tu_equipo_vectorized.png';
import LogoArg from './images/afa-seleccion-argentina.png';



const App = () => ( 
  <Provider store = {store}>
  <main>
    <div className='Nav'>
    <img src={LogoArg} alt='Logo' className='Logo'></img>
    <img src={ArmaTuEquipo} alt='foto' className='Titulo'></img>
    </div>
    <Jugadores />
    <EquipoSeleccionado />
  </main>
  </Provider>
)

export default App;
