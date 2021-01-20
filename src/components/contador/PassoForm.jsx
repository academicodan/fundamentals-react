import React from 'react'

const PassoForm = (props) => {
  return (
    <div>
        <label htmlfor="passoInput">Referencia: </label>
        <input id="passoInput" type="number" value={props.referencia}
        onChange={(e) => props.onReferenciaChange(+e.target.value)}
        />
    </div>
  )
}

export default PassoForm
