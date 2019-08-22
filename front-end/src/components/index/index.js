import React, { Component } from 'react';

// import { Container } from './styles';

import SmartList from '../list';

export default class IndexPage extends Component {
  render() {
    return (
        <div className="container">
            <h1>Lista de Celulares</h1>
            <div className="my-2"><a className="btn btn-success btn-sm" href='/create'> + Cadastrar Novo Telefone</a></div>
            <SmartList smartphones={this.props.smartphones} />

        </div>
    )
  }
}
