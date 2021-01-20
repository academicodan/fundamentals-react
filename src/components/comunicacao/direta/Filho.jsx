import React from 'react'

export default props =>
<div>
  <p>{props.children} {props.sobrenome}</p>
</div>

//tenho um componente filho que vai receber propriedades do componente pai
//Essas são as comunicações diretas onde o pai passa a propriedade parav o filho