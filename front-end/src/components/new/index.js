import React, { Component } from 'react';

import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default class NewPage extends Component {

    state = {
        smartphone: {
            modelo: '',
            fabricante: '',
            capacidade_armazenamento: 0,
            tamanho_tela: 0,
            versao_so: ''
        }
    }

    updateValue = (e) => {
        const { smartphone } = this.state;

        this.setState({
            smartphone: {...smartphone, [e.target.name]: e.target.value }
        });
    }

    handleSave = async (e) => {

        e.preventDefault();

        const id = await this.props.onSave(this.state.smartphone);

        this.props.history.replace(`/smartphones/${id}`);
    }

    render() {
        const { smartphone } = this.state;

        return (

            <div className="container">
                <div className="row justify-content-center">
                    <h1>Cadastrar Novo Celular</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form onSubmit={this.handleSave}>
                            <div className="form-group">
                                <label>Modelo</label>
                                <input type="text" className="form-control" name="modelo" value={smartphone.modelo || ''} onChange={this.updateValue}/>
                            </div>
                            <div className="form-group">
                                <label>Fabricante</label>
                                <input type="text" className="form-control" name="fabricante" value={smartphone.fabricante || ''} onChange={this.updateValue}/>
                            </div>
                            <div className="form-group">
                                <label>Armazenamento</label>
                                <input type="number" className="form-control" name="capacidade_armazenamento" value={smartphone.capacidade_armazenamento || ''} onChange={this.updateValue}/>
                            </div>
                            <div className="form-group">
                                <label>Tamanho Tela</label>
                                <input type="number" className="form-control" name="tamanho_tela" value={smartphone.tamanho_tela || ''} onChange={this.updateValue}/>
                            </div>
                            <div className="form-group">
                                <label>Versão SO</label>
                                <input type="text" className="form-control" name="versao_so" value={smartphone.versao_so || ''} onChange={this.updateValue}/>
                            </div>
                        
                            <div className="form-group">
                                <button className="btn btn-primary mb-2">Cadastrar</button>
                            </div>
                            <div className="form-group">
                                <Link to="/">Cancel</Link>
                            </div>
                        </form>
                    </div>
                    
                </div>
                
               
            </div>
        
        );
    }
}
