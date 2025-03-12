import { useState } from "react"

function BackgroundChanger() {
    const [background, setBackground] = useState('beige')

    return(
        <div className="absolute inset-3 rounded-4xl ring-1 ring-black/5 ring-inset shadow flex justify-center items-end" style={{ backgroundColor: background }}>
            <div className="rounded-4xl bg-zinc-100 dark:bg-gray-400 px-5 sm:px-3 py-3 mb-3 shadow-lg overflow-x-auto">
                <div className="flex flex-nowrap">
                    <button className="rounded-4xl text-white px-9 py-3 mr-2 cursor-pointer" style={{ backgroundColor: "red"}} onClick={() => setBackground('red')}>Red</button>
                    <button className="rounded-4xl text-white px-9 py-3 mr-2 cursor-pointer" style={{ backgroundColor: "green" }} onClick={() => setBackground('green')}>Green</button>
                    <button className="rounded-4xl text-white px-9 py-3 mr-2 cursor-pointer" style={{ backgroundColor: "blue" }} onClick={() => setBackground('blue')}>Blue</button>
                    <button className="rounded-4xl text-white px-9 py-3 mr-2 cursor-pointer" style={{ backgroundColor: "olive" }} onClick={() => setBackground('olive')}>Olive</button>
                    <button className="rounded-4xl text-white px-9 py-3 mr-2 cursor-pointer" style={{ backgroundColor: "gray" }} onClick={() => setBackground('gray')}>Gray</button>
                    <button className="rounded-4xl px-9 py-3 mr-2 cursor-pointer" style={{ backgroundColor: "yellow" }} onClick={() => setBackground('yellow')}>Yellow</button>
                    <button className="rounded-4xl px-9 py-3 mr-2 cursor-pointer" style={{ backgroundColor: "pink" }} onClick={() => setBackground('pink')}>Pink</button>
                    <button className="rounded-4xl text-white px-9 py-3 mr-2 cursor-pointer" style={{ backgroundColor: "purple" }} onClick={() => setBackground('purple')}>Purple</button>
                    <button className="rounded-4xl px-9 py-3 mr-2 cursor-pointer" style={{ backgroundColor: "lavender" }} onClick={() => setBackground('lavender')}>Lavender</button>
                    <button className="rounded-4xl px-9 py-3 mr-2 cursor-pointer" style={{ backgroundColor: "white" }} onClick={() => setBackground('white')}>White</button>
                    <button className="rounded-4xl text-white px-9 py-3 cursor-pointer" style={{ backgroundColor: "black" }} onClick={() => setBackground('black')}>Black</button>
                </div>
            </div>
        </div>
    )
}

export default BackgroundChanger