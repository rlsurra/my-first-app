import React, { Component } from 'react';
import './CSS/App.css';
import Productos from '././Productos.js'

class App extends Component {

  //Constructor define la estructura que permite almacenar en memoria (KISS)
  //Es el primer método que se ejecuta

  constructor(props) {
    super(props);

    this.state = {
      inventoryProducts: [],
      inputContactId: '',
      filtroBusqueda: ''
    };


    this.handleChangeFiltroBusqueda = this.handleChangeFiltroBusqueda.bind(this)
    this.handleSearchProductInventory = this.handleSearchProductInventory.bind(this);
    this.handleChangeOfContactValue = this.handleChangeOfContactValue.bind(this);
  }

  handleChangeFiltroBusqueda(event){
    this.setState({filtroBusqueda: event.target.value});
  }

  handleChangeOfContactValue(event){
    this.setState({inputContactId: event.target.value});
  }

  handleSearchProductInventory() {

    fetch('/contact/' + this.state.inputContactId)
    //fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => this.setState({ inventoryProducts: data }))
    .catch(function(error) { console.log('Hubo un error. Por favor, enviar el codigo al administrador\n'+error) })

  }
  /*
  isSearchButtonEnabled(){
    return this.state.inputContactId !== null && this.state.filtroBusqueda !== null;
  }
  */

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
              <span>  || CRM Express </span>
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
                    <option value="1">Nro contacto</option>
                  </select>
                </div>
              </div>

              <div class="col-5">
                <label for="valor">Valor <span>*</span></label>
                <input type="text" onChange={this.handleChangeOfContactValue} class="form-control"/>
              </div>

              <div class="col-2 mb-3">
                <br></br>
                <button id="buscar" type="button" class="btn btn-primary float-right" onClick={this.handleSearchProductInventory}> BUSCAR </button>

              </div>

            </div>

          
        </div>

        <Productos productos={this.state.inventoryProducts} />

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