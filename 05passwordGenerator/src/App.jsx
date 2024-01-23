import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  console.log("App component is reloaded");
  // varibale for adding value to the UI
  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);
  let [Password, setPassword] = useState("");
  let passwordRef = useRef(null);

  // This is usecallback hook
  let passwordGenerator = useCallback(() => {

    let pass = ""
    let samplePass = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      samplePass += 1234567890
    }
    if (charAllowed) {
      samplePass += "!@#$%^&*(){}[]~`"
    }
    // let length = samplePass.length;
    // creating the random password
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * samplePass.length + 1)
      pass += samplePass.charAt(char);
    };
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword])

  // for copy the password
  let copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  // This is useeffect hook
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, setPassword])
  return (
    <>
      <div className="password-generator">
        <h1 className='text-center mb-3'>Password genetator</h1>
        <div className="main-password-container d-flex flex-column gap-2 p-3">
          <div className="password-container">
            <div className="input-group mb-3">
              <input type="text" class="form-control" placeholder="get password" ref={passwordRef} value={Password} aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <span className="input-group-text custom-copy-btn" id="basic-addon2" onClick={copyPassword}>Copy</span>
            </div>
          </div>
          <div className="password-action-container d-flex gap-3">
            <div className="range-container d-flex gap-2">
              <input type="range" className="form-range" min="1" max="50" value={length} id="customRange2" onChange={(e) => {
                let length = e.target.value;
                setLength(length);
              }} />
              <label for="customRange2" className="form-label">length ({length})</label>
            </div>
            <div className="is-number-container">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value={numberAllowed} id="flexCheckDefault" onChange={() => {
                  setNumberAllowed((prev) => {
                    numberAllowed = !prev
                    console.log(numberAllowed);
                    return numberAllowed;
                  })
                }} />
                <label className="form-check-label" for="flexCheckDefault">
                  Add Number
                </label>
              </div>
            </div>
            <div className="is-char-container">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value={charAllowed} id="flexCheckDefault" onChange={() => {
                  setCharAllowed((prev) => {
                    // prev=!prev;
                    charAllowed = !prev
                    console.log(charAllowed);
                    return charAllowed;
                  })
                }} />
                <label className="form-check-label" for="flexCheckDefault">
                  Add Character
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App