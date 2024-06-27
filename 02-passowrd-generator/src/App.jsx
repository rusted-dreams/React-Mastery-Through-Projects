import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [specialChr, setSpecialChr] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null)

  // the function for generating password:
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers) {
      str += "0123456789";
    }
    if (specialChr) {
      str += "!@#$%^&*-_=+{}[]~`";
    }
    for (let i = 0; i < length; i++) { 
      
      // pick n(length) random letters and join them to form a passwd
      let num = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(num);
    }
    setPassword(pass);
  }, [numbers, specialChr, length, setPassword]);


  // calls the generatePassword() on page rerenders or dependency change.
  useEffect(() => {
    generatePassword();
  }, [length, numbers, specialChr, setPassword]);


  const copyPasswd = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className="bg-gray-800 max-w-lg rounded-lg w-full text-orange-500 px-4 my-8 py-3 mx-auto">
        <h1 className="text-center my-3 text-white">Password Generator</h1>
        <div className="mb4 flex shadow-lg rounded overflow-hidden">
          <input
            type="text"
            className="outline-none w-full px-3 py-1"
            readOnly
            value={password}
            placeholder="Password"
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswd}
          className="bg-blue-700 text-white outline-none shrink-0 px-4 py-2 hover:bg-blue-400">
            Copy
          </button>
        </div>
        <div className="flex w-full my-4 mx-auto">
          <input
            type="range"
            className="mr-1"
            min={6}
            max={60}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Length:{length}</label>

          <input
            type="checkbox"
            defaultChecked={numbers}
            id="numbers"
            onChange={() => {
              setNumbers((prev) => !prev);
            }}
            className="ml-3 mr-1"
          />
          <label htmlFor="numbers">Numbers</label>

          <input
            type="checkbox"
            defaultChecked={specialChr}
            id="specialChrs"
            onChange={() => {
              setSpecialChr((prev) => !prev);
            }}
            className="ml-3 mr-1"
          />
          <label htmlFor="specialChr">Special Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
