import React from 'react'
import './Card.css'

export default props => 
<div className="Card" style={{
    borderColor: props.color || '#000'
  }}>
  <div className="Content">
    {props.children}
    {/* Com o children o que passo dentro da tag  */}
  </div>
  <div className="Footer" style={{
    backgroundColor: props.color || '#000'
  }}>
    {props.titulo}
  </div>
</div>