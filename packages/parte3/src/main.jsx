import React, { useState } from "react"
import ReactDOM from "react-dom/client"

const WarningNotUsed = () => {
    return <h1>Todavia no se ha usado el contador</h1>
}

const ListOfClicks = ({ clicks }) => {
    return <p>{clicks.join(", ")}</p>
}

const App = () => {
    // const [left, setLeft] = useState(10)
    // const [right, setRight] = useState(20)

    const [counters, setCounters] = useState({
        left: 0,
        right: 0,
        mensaje: 'Mensaje en el estado'
    })

    const [clicks, setClicks] = useState([])

    const handleClickLeft = () => {
        const newCountersState = {
            ...counters,
            left: counters.left + 1,
        }
        setCounters(newCountersState)

        setClicks(prevClicks => ([...prevClicks, "L"]))
        // return prevClicks.concat('L')

        // setCounters({
        //     left: counters.left + 1,
        //     right: counters.right
        // })
    }
    const handleClickRight = () => {
        setCounters({
            ...counters,
            right: counters.right + 1,
        })

        setClicks(prevClicks => ([...prevClicks, "R"]))
    }

    return (
        <div>
            {counters.left}
            <button onClick={handleClickLeft}>
                left
            </button>
            <button onClick={handleClickRight}>
                right
            </button>
            {counters.right}
            <p>Clicks totales: {clicks.length}</p>
            {clicks.length === 0 ? <WarningNotUsed /> : <ListOfClicks clicks={clicks} />}
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)