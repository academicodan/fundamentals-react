import React from 'react'
import './Card.css'

export default props => 
<div className="Card">
  <div className="Content">
    {props.children}
    {/* Com o children o que passo dentro da tag  */}
  </div>
  <div className="Footer">
    {props.titulo}
  </div>
</div>