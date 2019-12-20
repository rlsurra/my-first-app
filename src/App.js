import React, { Component } from 'react';
import logo from './images/telefonica.png'
import Productos from '././Productos.js'
import './css/style.css';

class App extends Component {

  //Constructor define la estructura que permite almacenar en memoria (KISS)
  //Es el primer método que se ejecuta

  constructor(props) {
    super(props);

    this.state = {
      inventoryProducts: [],
      inputContactId: '',
      filtroBusqueda: '',
      isValid: true
    };


    this.handleChangeFiltroBusqueda = this.handleChangeFiltroBusqueda.bind(this)
    this.handleSearchProductInventory = this.handleSearchProductInventory.bind(this);
    this.handleChangeOfContactValue = this.handleChangeOfContactValue.bind(this);
  }

  updateStatusSearchButton(){
    if(this.state.inputContactId.length > 1) {this.setState({isValid: false})}
  }

  handleChangeFiltroBusqueda(event){
    this.setState({filtroBusqueda: event.target.value});
    this.updateStatusSearchButton();
  }

  handleChangeOfContactValue(event){
    this.setState({inputContactId: event.target.value});
    this.updateStatusSearchButton();
  }

  handleSearchProductInventory() {

    fetch('/contact/' + this.state.inputContactId)
    //fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => this.setState({ inventoryProducts: data }))
    .catch(function(error) { console.log('Hubo un error. Por favor, enviar el codigo al administrador\n'+error) })

  }
  
  isSearchButtonEnabled(){
    return false
    //this.state.inputContactId !== null && this.state.filtroBusqueda !== null;
  }
  

  //Pinta la pantalla
  render() {
    return (
      //React solo puede renderizar una etiqueta -> debemos contener todo en un div
      //<h1 className="display-1"> TITULO CON BOOTSTRAP </h1>
  <div className="App">

    <head>
      
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="" />
      <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors" />
      <meta name="generator" content="Jekyll v3.8.5" />
      <title>CRM-EXPRESS-TELEFONICA3.0</title>

      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
      <link href="style.css" rel="stylesheet" />

    </head>


    <body>
      <header>

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
          <div class="container">
            <img src={require('./images/telefonica.png')} width="110px"/>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#info">info cliente</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#operaciones">operaciones</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#nosotros">nosotros</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </header>

      <main role="main">


        <header class="bg-header text-white">
          <div class="container text-center">
            <h1>BIENVENIDE AL CRM EXPRESS</h1>
            <p class="lead">Por favor, ponga en contexto al cliente para habilitar las operaciones existentes.</p>
          </div>
        </header>



        <div id="info" class="bg-about mx-auto">
          <h2>Busqueda de informacion del cliente</h2>
          <p class="lead">Esta interfaz nos permite obtener información del cliente con el fin de realizar las validaciones necesarias antes de realizar alguna operatoria del sistema.</p>
          <br />

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
                <input type="text" onChange={this.handleChangeOfContactValue} value={this.state.inputContactId} class="form-control" />
              </div>

              <div class="col-2 mb-3">
                <br></br>
                <button id="buscar" type="button" class="btn btn-primary float-right" disabled={this.state.isValid} onClick={this.handleSearchProductInventory}> BUSCAR </button>
                <br></br>
              </div>

              <Productos productos={this.state.inventoryProducts} />

            </div>
          </div>
        </div>

        <div class="album py-5 bg-light">
          <div class="container">

            <div class="row">
              <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                  <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  <div class="card-body">
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small class="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                  <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  <div class="card-body">
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small class="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                  <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  <div class="card-body">
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small class="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div id="nosotros" class="bg-about mx-auto">
          <h2>SOBRE NOSOTROS</h2>
          <p class="lead">El objetivo de esta web es proveer a los representantes y otros usuarios la posibilidad de realizar operaciones de forma más simple. De esta manera, logramos además una mejor imagen con el cliente.</p>
          <br />

        </div>

      </main>

      <footer class="footer">
        <div class="container">
          <p class="m-0 text-center text-white">Copyright &copy; TELEFONICA MOVILES SA</p>
        </div>

      </footer>
    </body>



  </div>
    );
  }
}

export default App;

/*
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
                <input type="text" onChange={this.handleChangeOfContactValue} value={this.state.inputContactId} class="form-control"/>
              </div>

              <div class="col-2 mb-3">
                <br></br>
                <button id="buscar" type="button" class="btn btn-primary float-right" disabled={this.state.isValid} onClick={this.handleSearchProductInventory}> BUSCAR </button>

              </div>

            </div>

          
        </div>

        <Productos productos={this.state.inventoryProducts} />





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