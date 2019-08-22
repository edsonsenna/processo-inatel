import React, { Component } from 'react';

// import { Container } from './styles';

export default class ShowPage extends Component {

    state = {
        smartphone: null
    }

    UNSAFE_componentWillMount() {

        const { smartphone } = this.props;

        this.setState({
            ...this.state,
            smartphone
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center pt-3">
                    <div className="card">
                        <h5 className="card-header">Detalhes do Celular</h5>
                        <div className="card-body">
                            <div className="card-text">
                                <strong>Modelo: </strong>{this.state.smartphone.modelo}<br/>
                                <strong>Fabricante: </strong>{this.state.smartphone.fabricante}<br/>
                                <strong>Capacidade: </strong>{this.state.smartphone.capacidade_armazenamento} GB<br/>
                                <strong>Tamanho Tela:  </strong>{this.state.smartphone.tamanho_tela}<br/>
                                <strong>Versão SO:  </strong>{this.state.smartphone.versao_so}<br/>
                            </div>
                            <a href="/" className="btn btn-primary mt-3">Retornar ao início</a>
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}
