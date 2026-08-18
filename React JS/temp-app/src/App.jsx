import React from 'react'
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import Clock from './components/Clock'
import TodoApp from './components/TodoApp'

const App = () => {
  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      {/* <Welcome name="John Doe" />
      <Counter />
      <Clock /> */}
      <TodoApp />
    </div>
  )
}

export default App