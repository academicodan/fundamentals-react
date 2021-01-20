import React from 'react'


export default props => {

  function acao() {
    props.clicando(Math.random(), 'Numero randomico');
  }
  return(
    <div>
      <button onClick={acao}>Alterar</button>
    </div>
  )
}

//Através do props eu recebo a função enviada pelo super

//Com o use state posso criar um dado na aplicação que pode ser mudado