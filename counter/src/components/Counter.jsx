import { useState } from "react"

function Counter() {
    const [counter, setCounter] = useState(0)

    const increment = () =>{
        if(counter >= 25) { return }
        setCounter(counter + 1)
    }

    const decrement = () =>{
        if(counter <= 0) { return }
        setCounter(counter - 1)
    }

    return (
        <div className="absolute flex justify-center items-center inset-3 rounded-4xl ring-1 ring-black/5 ring-inset bg-zinc-200 dark:bg-zinc-900 shadow">
            <div className="grid gap-4 p-4">
                <h2 className="rounded-4xl bg-indigo-300 dark:bg-gray-400 px-12 py-4 font-mono text-5xl font-bold dark:text-gray-200 sm:text-7xl mb-5">Counter: {counter}</h2>

                <div className="flex gap-4 justify-center">
                    <button className="group relative inline-block text-lg font-medium text-zinc-600 focus:outline-none focus:ring active:text-zinc-500 cursor-pointer" onClick={increment}>
                        <span
                            className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-zinc-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                        ></span>

                        <span className="relative block border border-current bg-zinc-100 px-8 py-3"> Increment </span>
                    </button>
                    <button className="group relative inline-block text-lg font-medium text-zinc-600 focus:outline-none focus:ring active:text-zinc-500 cursor-pointer" onClick={decrement}>
                        <span
                            className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-zinc-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                        ></span>

                        <span className="relative block border border-current bg-zinc-100 px-8 py-3"> Decrement </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Counter