import React, { useState } from 'react';

export default (props) => {
  const [numeros, setNumeros] = useState(Array(8).fill(0))

  function gerarNumeros() {
    setNumeros([1, 2, 3, 4, 5, 6, 7, 8])
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
