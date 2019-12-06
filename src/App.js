import React, { Component } from 'react';
import './App.css';
import Productos from '././Productos.js'

class App extends Component {

  //Constructor define la estructura que permite almacenar en memoria (KISS)
  //Es el primer método que se ejecuta

  constructor(props) {
    super(props);

    this.state = {
      productos: [], suscripcion: ''
    };

    this.handleSearchButton = this.handleSearchButton.bind(this);
}

  handleSearchButton() {

      fetch('/1169557094')
      //fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ productos: data })
      })
      .catch(function(error) {
        alert("La API productInventory no esta funcionando. Por favor, contactar al administrador")
      }
      )
  }

  //Pinta la pantalla
  render() {
    return (
      //React solo puede renderizar una etiqueta -> debemos contener todo en un div
      //<h1 className="display-1"> TITULO CON BOOTSTRAP </h1>
      <div className="App">
        <div id="header">

          <div className="header_content">

            <div className="logo">
              <label> telefonica 3.0 </label>
              <span>  || gestion simplificada de operaciones</span>
            </div>

            <div className="menu">
              <ul>
                <li><label>home</label></li>
                <li><label>about us</label></li>
              </ul>
            </div>

          </div>
        </div>

        <div className="slogan">
          <div className="top_slogan">
            Bienvenidos al CRM para la gestion simplificada de operaciones en T3.
            Por favor, seleccione la operacion que desea realizar.
            </div>
        </div>

        <div className="grilla">
          <div class="row">

              <div class="col-5">
                <label for="filtro">Elija el filtro de busqueda <span>*</span> </label>
                <div class="desplegable">
                  <select name="filtro" class="form-control">
                    <option disabled="disabled" selected="selected">Elija una opcion</option>
                    <option value="1">Recurso primario</option>
                  </select>
                </div>
              </div>

              <div class="col-5">
                <label for="valor">Valor <span>*</span></label>
                <input type="text" class="form-control" required />
              </div>

              <div class="col-2 mb-3">
                <br></br>
                <button id="buscar" type="button" class="btn btn-primary float-right" onClick={this.handleSearchButton}> BUSCAR </button>

              </div>

            </div>

          
        </div>

        <Productos productos={this.state.productos} />
 
        </div>
    );
  }
}

export default App;

/*

            <div class="row-info">
              <div class="col-md-6 mb-3">
                <label for="first_name">PLAN</label>
                <div id="namePlan" type="text" class="form-control"> Aca se mostrará el nombre de plan... </div>
                </div>
              <div class="col-md-6 mb-3">
                <label for="last_name">DESCRIPCION</label>
                <div id="descPlan" type="text" class="form-control"> Aca se mostrarán los detalles del plan... </div>
              </div>
            </div>

*/