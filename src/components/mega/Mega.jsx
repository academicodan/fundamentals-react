import React, { useState } from 'react';

export default (props) => {
  const [numeros, setNumeros] = useState(Array(8).fill(0))

  function gerarNumerosNaoContido(array) {
    const min = 1
    const max = 60
    const novoNumero = parseInt(Math.random() * (max - min) + min)
    return array.includes(novoNumero) ? gerarNumerosNaoContido(array) : novoNumero
  }

  function gerarNumeros() {
    const novoArray = Array(8)
    .fill(0)
    .reduce((a, e) => {
      const novoNumero = gerarNumerosNaoContido(a)
      console.log(a, e, novoNumero)
      return[...a, novoNumero]
    }, [])
    .sort((a,b) => a - b)
    setNumeros(novoArray)
  }

  return(
    <div>
      <h3>Mega</h3>
      {/*.join() permite mostrar um numero apos o outro com o que esta dentro do parentese */}
      <h4>{numeros.join(' ')}</h4>
      <button onClick={gerarNumeros}>Gerar Numeros</button>
    </div>
  )
}
