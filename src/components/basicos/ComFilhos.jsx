import React from 'react'

export default props =>
<div>
  <h2>Os filhos :</h2>
  <div>
    {props.children}
    {/* O props.children é responsável por receber o que é passado no componente */}
  </div>
</div>