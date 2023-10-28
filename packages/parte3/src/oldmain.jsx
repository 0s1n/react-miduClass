import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const Counter = ({ number }) => {
  console.log('Counter render')
  return <h1>{number}</h1>
}

const App = () => {
  const [contador, setContador] = useState(0)

  // const contador = useState(13)
  // const contadorValue = contador[0]
  // const updateContador = contador[1]

  console.log('render')

  const handleClick = () => {
    // setContador(contador + 1)
    setContador(prevContador => prevContador + 1)
  }
  const handleClickReset = () => {
    setContador(0)
  }

  const isEven = contador % 2 === 0

  // let mensajePar = ""
  // if (isEven) {
  //   mensajePar = "Es par:"
  // } else {
  //   mensajePar = "Es impar"
  // }

  const mensajePar = isEven ? 'Es par:' : 'Es impar'

  return (
    <div>
      <p>El valor del contador es:</p>
      <Counter number={contador} />
      <small>{mensajePar}</small>
      <button
        onClick={handleClick}
      >
        Incrementar
      </button>
      <button
        onClick={handleClickReset}
      >
        Reset
      </button>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
