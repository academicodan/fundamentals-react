import React from 'react'

export default props => {
  return (
    <div>
      <h2>O número é {props.numero}</h2>
      {props.numero % 2 === 0 ? <span>Par</span> : <span>Impar</span>}
    </div>
  )
}


// Para fazer uma renderização condicional eu uso a logica de 
// Programação para numeros pares usando operadores ternários