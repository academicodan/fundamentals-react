import React, {useState} from 'react'
import Sub from './Sub'

export default props => {

  const [num, setNum] = useState(0)
  const [text, setText] = useState('Valor')

  function quandoClicar(valorGerado, texto) {
    setNum(valorGerado)
    setText(texto)
  }
  return(
    <div>
      <h4>{text}: {num}</h4>
      <Sub clicando={quandoClicar}></Sub>
    </div>
  )
}