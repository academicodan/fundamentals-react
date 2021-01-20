import React from 'react';
import Botoes from './Botoes';
import './Contador.css';
import { Display } from './Display';
import PassoForm from './PassoForm';


class Contador extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      referencia: props.referencia || 1,
      valor: props.valor || 0
    }
  }
  // Outra maneira seria 
  // state = {
  //   referencia: this.props.passo,
  //   valor: 0
  // }
  inc = () => {
    this.setState({
      valor: this.state.valor + this.state.referencia
    })
  }
  dec = () => {
    this.setState({
      valor: this.state.valor - this.state.referencia
    })
  }
  //Importante usar arrow function nos usos de this

  mudarReferencia = (novaReferencia) => {
    this.setState({
      referencia: novaReferencia
    })
  }
  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <PassoForm referencia={this.state.referencia} onReferenciaChange={this.mudarReferencia}></PassoForm>
        <Display valor={this.state.valor}></Display>
        <Botoes onInc={this.inc} onDec={this.dec}></Botoes>
      </div>
    )
  }
}


export default Contador;