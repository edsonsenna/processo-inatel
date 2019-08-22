import React, { Component } from 'react';

//import logo from './logo.svg';
import './App.css';

import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

class App extends Component {
  
  state = {
    smartphones: []
  }

  componentDidMount() {

    const url = `${API_URL}/smartphones/`;
    axios.get(url)
      .then(res => res.data)
      .then((data) => {
        this.setState({
          ...this.state,
          smartphones: data
        });
      });

  }

  renderSmartphones() {

    const url = `${API_URL}/smartphones`

    return this.state.smartphones.map(n => <li key={n._id}>{n.modelo} / <a href={url + '/' + n._id}>Editar</a></li>);

  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Lista de Smartphones Cadastrados</h3>
            <ul>{this.renderSmartphones()}</ul>
          </div>
        </div>
      </div>
      
    );
  } 
}

export default App;
