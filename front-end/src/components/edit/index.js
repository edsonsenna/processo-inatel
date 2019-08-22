import React, { Component } from 'react';

import { Link } from 'react-router-dom';
// import { Container } from './styles';

export default class EditPage extends Component {

    state = {
        smartphone: {}
    }

    componentDidMount() {

        const { smartphone } = this.props;

        this.setState({
            ...this.state,
            smartphone
        });
    }

    updateValue = (e) => {
        const { smartphone } = this.state;

        this.setState({
            smartphone: {...smartphone, [e.target.name]: e.target.value }
        });
    }

    handleUpdate = async (e) => {

        e.preventDefault();

        const id = await this.props.onUpdate(this.state.smartphone);

        this.props.history.replace(`/smartphones/${id}`);
    }

    render() {

        const { smartphone } = this.props;

        if(!smartphone) {
            return null;
        }

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <h1>Atualizar Informações</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form onSubmit={this.handleUpdate}>
                            <div className="form-group">
                                <label>Modelo</label>
                                <input type="text" className="form-control" name="modelo" defaultValue={smartphone.modelo || ''} onChange={this.updateValue} required />
                            </div>
                            <div className="form-group">
                                <label>Fabricante</label>
                                <input type="text" className="form-control" name="fabricante" defaultValue={smartphone.fabricante || ''} onChange={this.updateValue} required />
                            </div>
                            <div className="form-group">
                                <label>Armazenamento</label>
                                <input type="number" className="form-control" name="capacidade_armazenamento" defaultValue={smartphone.capacidade_armazenamento || 0} onChange={this.updateValue} step="0.1" required />
                            </div>
                            <div className="form-group">
                                <label>Tamanho Tela</label>
                                <input type="number" className="form-control" name="tamanho_tela" defaultValue={smartphone.tamanho_tela || 0} onChange={this.updateValue} step="0.1" required />
                            </div>
                            <div className="form-group">
                                <label>Versão SO</label>
                                <input type="text" className="form-control" name="versao_so" defaultValue={smartphone.versao_so || ''} onChange={this.updateValue} required />
                            </div>
                        
                            <div className="form-group">
                                <button className="btn btn-primary mb-2">Atualizar</button>
                            </div>
                            <div className="form-group">
                                <Link to="/">Cancelar</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
