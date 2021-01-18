export default function () {
  if(props.test) {
    return props.children
  } else {
    return false
  }
}

// Por ser uma funcao anonima, na hora de importar eu defino o nome dela