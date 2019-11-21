import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { planes } from './datosPlan.json';

class App extends Component {

  //Constructor define la estructura que permite almacenar en memoria (KISS)
  //Es el primer método que se ejecuta

  constructor() {
    super(); //Heredar funcionalidad de componente de react
    this.state = {
      planes
    }

  }

  //Pinta la pantalla
  render() {
    const planes = this.state.planes.map((plan, i) => {
      return (
        <div className="card">
          <h3> {plan.name} </h3>
        </div>
      )
    })

    return (
      //React solo puede renderizar una etiqueta -> debemos contener todo en un div
      //<h1 className="display-1"> TITULO CON BOOTSTRAP </h1>
      <div className="App">
        <div id="header">

          <div className="header_content">

            <div className="logo">
              <a href="">telefonica 3.0 </a>
              <span>|| gestion simplificada de operaciones</span>
            </div>

            <div className="menu">
              <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">about us</a></li>
              </ul>
            </div>

          </div>
        </div>  

        <div id="slogan"> 
            <div className="top_slogan"> 
              Bienvenidos al CRM para la gestion simplificada de operaciones en T3.
              Por favor, seleccione la operacion que desea realizar. 
            </div>  
        </div>



      </div>
    );
  }
}

export default App;
