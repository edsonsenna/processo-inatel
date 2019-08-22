import React, { Component } from 'react';

import { Link } from 'react-router-dom';

//import axios from 'axios';

// import { Container } from './styles';

export default class SmartList extends Component {

    handleDelete(id) {
        console.log('Deletando => ', id);
    }


    renderSmartphones() {

        const smartphones = Object.values(this.props.smartphones);

        return smartphones.map((n) => 
                <tr key={`smart_${n._id}`}>
                  <td >{n.modelo}</td>
                  <td >{n.fabricante}</td>
                  <td >{n.capacidade_armazenamento}</td>
                  <td >{n.tamanho_tela}</td>
                  <td >{n.versao_so}</td>
                  <td >
                    <Link className="btn btn-sm btn-info mr-2" to={`/smartphones/${n._id}`}>Info</Link>
                    <Link className="btn btn-sm btn-primary mr-2" to={`/smartphones/edit/${n._id}`}>Editar</Link>
                    <button className="btn btn-sm btn-danger" >Excluir</button>
                  </td>
                </tr>
        );
    }

    render() {
        return (
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Modelo</th>
                  <th scope="col">Fabricante</th>
                  <th scope="col">Armazenamento</th>
                  <th scope="col">Tamanho Tela</th>
                  <th scope="col">Versao SO</th>
                  <th scope="col">Ações</th>
                </tr>
              </thead>
              <tbody>
                {this.renderSmartphones()}
              </tbody>
            </table>

        );
    }
}
