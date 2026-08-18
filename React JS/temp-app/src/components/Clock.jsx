import {useState,useEffect} from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timerID)
  }, [])

  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="text-xl font-semibold text-gray-700">The current time is {time.toLocaleTimeString()}.</p>
    </div>
  )
}

export default Clock