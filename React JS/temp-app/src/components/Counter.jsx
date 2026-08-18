import React,{useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-row items-center space-x-4">
      <p className="text-xl font-semibold text-gray-700">Count: {count}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  )
}

export default Counter