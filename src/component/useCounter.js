import { useState } from 'react'


const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue)

    const add = () => {
        setCount(count + 1)
    }

    const lessen = () => {
        setCount(count - 1)
    }

    const clear = () => {
        setCount(initialValue)
    }

  return [count, add, lessen, clear]
}

export default useCounter