import React, {useState} from 'react';

export default (props) => {
  const [nome, setName] = useState('Daniel')
  return(
    <div>
      <h3>{nome}</h3>
      <input type="text" value={nome} onChange={e => setName(e.target.value)}/>
    </div>
  )
}