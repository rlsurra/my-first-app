import React, { Component } from 'react';
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
    <div className="header">
    <head>

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="description" content=""/>
        <meta name="author" content=""/>

        <title>CRM-EXPRESS-TELEFONICA3.0</title>

        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>

        <link href="css/scrolling-nav.css" rel="stylesheet"/>

    </head>
    </div>
    );
  }
}

export default App2;