import { useState, useEffect } from "react"

function App() {
    const initialTime = 5 * 60
    const [time, setTime] = useState(initialTime)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        let timer
        if (isRunning && time > 0) {
            timer = setInterval(() => setTime((prev) => prev - 1), 1000)
        } else if (time === 0) {
            setTime(initialTime) // auto restart
        }
        return () => clearInterval(timer)
    }, [isRunning, time])

    const startTimer = () => setIsRunning(true);
    const pauseTimer = () => setIsRunning(false);
    const resetTimer = () => {
        setTime(initialTime)
        setIsRunning(false)
    }

    const formatTime = (secs) => {
        const minutes = Math.floor(secs / 60)
        const seconds = secs % 60
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h1 className="text-2xl font-semibold mb-4">Timer</h1>
                <p className="text-4xl font-bold mb-6">{formatTime(time)}</p>
                
                <div className="space-x-2">
                    <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer" onClick={startTimer}>Start</button>
                    <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 cursor-pointer" onClick={pauseTimer}>Pause</button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer" onClick={resetTimer}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default App
