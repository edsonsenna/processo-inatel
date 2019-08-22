import React, { Component } from 'react';

// import { Container } from './styles';

import SmartList from '../list';

export default class IndexPage extends Component {

  state = {
    smartphones: {},
  }
  

  render() {

    const { smartphones } = this.props;

    if(!smartphones) {
      return <h2>Loading...</h2>
    }

    return (
        <div className="container">
            <h1>Lista de Celulares</h1>
            <div className="my-2"><a className="btn btn-success btn-sm" href='/create'> + Cadastrar Novo Telefone</a></div>
            <SmartList smartphones={smartphones} />
        </div>
    )
  }
}
