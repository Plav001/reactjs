import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [password, setPassword] = useState("")
  const [buttonText, setButtonText] = useState('Copy')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numbers) str += "0123456789"
    if(characters) str += "!@#$%^&*~"

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numbers, characters, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password).then(() => {
      setButtonText("Copied!");
      setTimeout(() => setButtonText("Copy"), 3000);
    })
  }, [password])

  useEffect(() => {
    generatePassword()
  }, [length, numbers, characters, generatePassword])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white shadow-md rounded-lg">
        <h1 className="mb-6 text-xl font-bold">Password Generator</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-2 mb-3">
            <div className="flex items-stretch mb-3">
              <input
                type="text"
                name="password"
                value={password}
                placeholder="Password"
                readOnly
                ref={passwordRef}
                className="border border-gray-300 px-3 py-2 rounded-l-md focus:outline-none flex-grow" />
              <button onClick={copyPasswordToClipboard} className="border border-blue-300 text-white px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-md cursor-pointer font-medium">{buttonText}</button>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 flex flex-col">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3 w-full">
              <input
                type="range"
                min={0}
                max={100}
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="flex-grow cursor-pointer" />
              <label htmlFor="customRange1" className="text-gray-700 font-medium whitespace-nowrap text-sm">Length ({length})</label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="numbers"
                defaultValue={numbers}
                onChange={() => {setNumbers((prev) => !prev)}}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 focus:outline-none" />
              <label htmlFor="numbers" className="text-sm text-gray-700 font-medium">Numbers</label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="characters"
                defaultValue={characters}
                onChange={() => {setCharacters((prev) => !prev)}}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 focus:outline-none" />
              <label htmlFor="characters" className="text-sm text-gray-700 font-medium">Characters</label>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default App