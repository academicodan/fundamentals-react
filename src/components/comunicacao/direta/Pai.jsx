import React from 'react'
import Filho from'./Filho'


export default props => 
<div>
  <Filho{...props}><strong>Jao</strong></Filho>
  <Filho sobrenome={props.sobrenome}><strong>Carlos</strong></Filho>
  <Filho sobrenome="Carmo"><strong>Ana</strong></Filho>
</div>

//o operador spred {...props} ele cria um novo objeto que você recebeu no pai passando para o filho
//outra forma valida é pegando direto props.sobrenome