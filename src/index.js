import React from 'react';
import ReactDOM from 'react-dom';
//Importamos la navegacion
import './CSS/index.css';
import App from './App';
//Aplicacion funcionando sin conexion a Internet
//Permite que los cambios se persistan al recuperarse
import * as serviceWorker from './serviceWorker';


/* *********************************************************************************************** */
/* *********************************************************************************************** */


//Renderiza la aplicacion en "root" que se encuentra en un div de index.html
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
