import './App.css'
import React from 'react';
import ComFilhos from './components/basicos/ComFilhos'
import ComParametros from './components/basicos/ComParametros'
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import './index.css'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'

export default (props) => (
  <div className="App">
    <Card titulo="Primeiro Componente">
      <Primeiro />
    </Card>
    <Card titulo="Componente com Parametros">
      <ComParametros titulo="Esse é o titulo" subtitulo="Esse é o subtitulo" />
    </Card>
    <Card titulo="Componente com filhos">
      <ComFilhos>
        <ul>
          <li>Joao</li>
          <li>Carlos</li>
          <li>Pedro</li>
          <li>Ana</li>
        </ul>
      </ComFilhos>
    </Card>
    <Card titulo="Repeticao">
      <Repeticao></Repeticao>
    </Card>
    <Card titulo="Condicional V1">
      <Condicional numero={11}></Condicional>
    </Card>
  </div>
);