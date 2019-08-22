import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';

import axios from 'axios';

import IndexPage from './components/index';
import NewPage from './components/new';
import ShowPage from './components/show';
import EditPage from './components/edit';

const API_URL = 'http://localhost:8000/api';

class App extends Component {
  
  state = {
    smartphones: [],
    loading: true
  }

  async componentDidMount() {

    const url = `${API_URL}/smartphones/`;

    const res = await axios.get(url);

    let newArr = [];

    res.data.forEach(function(value){
      newArr[value._id] = value;
    });
    this.setState({
      ...this.state,
      smartphones: newArr,
      loading: false
    });

  }


  async handleUpdate(smartphone) {


    let res = await axios.put(`${API_URL}/smartphones/${smartphone._id}`, smartphone);


    let { smartphones } = this.state;

    smartphones[smartphone._id] = res.data;

    this.setState({
      ...this.state,
      smartphones
    });

    return res.data._id;

  }

  async handleSave(smartphone) {

    let res = await axios.post(`${API_URL}/smartphones/`, smartphone);

    this.setState({
      ...this.state,
      smartphones: {
        ...this.state.smartphones,
        res
      }
    });

    return res._id;


  }

  renderContent() {
    if(this.state.loading) {
      return <h2>Loading...</h2>
    }
    return (
      <div className="app-content">
        <Route exact path="/" component={(props) => <IndexPage {...props} smartphones={this.state.smartphones} />} />
        <Route exact path="/smartphones/:id" component={(props) => <ShowPage {...props} smartphone={this.state.smartphones[props.match.params.id]}/>}/>
        <Route exact path="/smartphones/edit/:id" component={(props) => <EditPage {...props} onUpdate={this.handleUpdate.bind(this)} smartphone={this.state.smartphones[props.match.params.id]}/>}/>
        <Route exact path="/create" component={(props) => <NewPage {...props} onSave={this.handleSave.bind(this)} />} />
      </div>
    );
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          { this.renderContent() }
        </div>
      </BrowserRouter>
      
    );
  } 
}

export default App;


/* <div className="container">
        <div className="row">
          <div className="col">
            <h3>Lista de Smartphones Cadastrados</h3>
            <ul>{this.renderSmartphones()}</ul>
          </div>
        </div>
      </div> */

      // <Route exact path="/smartphones/create" component={(props) => <NewPage {...props} onSave={this.handleSave} />} />
      // <Route exact path="/smartphones/:id" component={(props) => <ShowPage {...props} note={this.props.smartphones[props.match.params.id]}/>}/>
      // <Route exact path="/smartphones/edit/:id" component={(props) => <EditPage {...props} onUpdate={this.handleUpdate} note={this.props.smartphones[props.match.params.id]}/>}/>