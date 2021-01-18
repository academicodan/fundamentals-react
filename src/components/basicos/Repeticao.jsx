import React from 'react'
import produtos from '../../data/products'

export default props => {

  function getProdutosListItem() {
    return produtos.map(prod => {
      return <li key={prod.id}>
          {prod.id} - {prod.name} = R$ {prod.preco}
        </li>
    })
    
  }
  return(
    <div>
      <h2>Repeticao</h2>
      <ul>
        {getProdutosListItem()}
      </ul>
    </div>
  )
}

// Sempre que usarmos repetição, temos que utilizar a chave key
// Que ajuda o React a detectar quando ha alterações em algum elemento dentro da chave
// com o map, tranformamos um array de produtos em um array de trexos jsx
