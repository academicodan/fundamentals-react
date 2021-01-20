import './App.css'
import React from 'react';
import ComFilhos from './components/basicos/ComFilhos'
import ComParametros from './components/basicos/ComParametros'
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import './index.css'
import Repeticao from './components/basicos/Repeticao'
import Pai from './components/comunicacao/direta/Pai';
import Condicional from './components/basicos/Condicional'
import Super from './components/comunicacao/indireta/Super';
import Input from './components/form/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

export default (props) => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
    <Card titulo="Primeiro Componente" color="#09015f">
      <Primeiro />
    </Card>
    <Card titulo="Componente com Parametros" color="#af0069">
      <ComParametros titulo="Esse é o titulo" subtitulo="Esse é o subtitulo" />
    </Card>
    <Card titulo="Componente com filhos" color="#55b3b1">
      <ComFilhos>
        <ul>
          <li>Joao</li>
          <li>Carlos</li>
          <li>Pedro</li>
          <li>Ana</li>
        </ul>
      </ComFilhos>
    </Card>
    <Card titulo="Repeticao" color="#f6c065">
      <Repeticao></Repeticao>
    </Card>
    <Card titulo="Condicional V1" color="#6930c3">
      <Condicional numero={11}></Condicional>
    </Card>
    <Card titulo="Comunicaçaõ Direta" color="#6930f8">
      {/* O proprio pai chama o componente filho */}
      <Pai sobrenome="Freitas"></Pai>
    </Card>
    <Card titulo="Comunicação Indireta" color="#f6c128">
      <Super></Super>
    </Card>
    <Card titulo="Input" color="#55b973">
      <Input></Input>
    </Card>
    <Card titulo="Contador" color="#f5d789">
      <Contador referencia={10} valor={20}></Contador>
    </Card>
    <Card titulo="Mega" color="#090">
      <Mega></Mega>
    </Card>
    </div>
  </div>
);