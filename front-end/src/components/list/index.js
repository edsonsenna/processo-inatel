import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

//import axios from 'axios';

// import { Container } from './styles';


const API_URL = 'http://localhost:8000/api';

export default class SmartList extends Component {

    state = {
        smartphones: [],
        loading: true
    }

    async handleDelete(id) {

        if(window.confirm('Deseja realmente excluir o registro?')) {

            let res = await axios.delete(`${API_URL}/smartphones/${id}`);

            if(res.status === 200) {

                res = await axios.get(`${API_URL}/smartphones/`);

                let smartphones = res.data;

                this.setState({
                    ...this.state,
                    smartphones,
                    loading:false
                });
        
            }
        }
    }

    componentDidMount() {

        const { smartphones } = this.props

        this.setState({
            ...this.state,
            smartphones,
            loading:false
        });

    }

    renderSmartphones() {

        const smartphones = Object.values(this.state.smartphones);

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
                    <button className="btn btn-sm btn-danger" onClick={this.handleDelete.bind(this, n._id)}>Excluir</button>
                  </td>
                </tr>
        );
    }

    render() {

        const { smartphones } = this.state

        if(!smartphones) {
            return <h2>Loading...</h2>
        }

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
