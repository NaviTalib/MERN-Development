import { useState } from 'react';

export default function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function handleSubmit(e) {
        e.preventDefault(); // Prevents page reload on enter/submit
        if (!inputValue.trim()) return;
        setTodos([...todos, inputValue]);
        setInputValue('');
    }

    return (
        <div className="flex flex-col items-center space-y-4">
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter a new todo..."
                    className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Add Todo
                </button>
            </form>
            <ul className="list-disc pl-5">
                {todos.map((todo, index) => (
                    <li key={index} className="text-gray-700">
                        {todo}
                    </li>
                ))}
            </ul>
        </div>
    );
}