import { useCallback, useEffect, useState, useRef } from 'react'


function App() {


  let [length, setLength] = useState(8);
  let [numbersAllowed, setNumbersAllowed] = useState(false);
  let [charactersAllowed, setCharactersAllowed] = useState(false);
  let [password, setPassword] = useState("");


  let passwordRef = useRef(null);


  let generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if(numbersAllowed) str += "0123456789";
    if(charactersAllowed) str+= "!@#$%^&*-_+=[]{}~";
    for(let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random()*str.length)+1;
      pass += str.charAt(charIndex);
    }
    setPassword(pass);


  },[length, numbersAllowed,  charactersAllowed, setPassword])




  let copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])






  useEffect(() => {
    generatePassword();
  }, [length, numbersAllowed, charactersAllowed])






  return (
    <>
      <div className='text-orange-300 w-screen my-5 py-5 px-5 flex flex-col justify-center items-center'>
        <div className='text-4xl'>Password Generator</div>
        <div className='bg-slate-500 py-10 my-10 rounded-3xl w-full lg:w-3/5'>
          <div className='flex justify-center'>
            <input type="text" value={password} readOnly className='text-black px-2' ref={passwordRef}/>
            <button className='bg-blue-700 p-2 text-white' onClick={copyToClipboard}>COPY</button>
          </div>
          <div className='py-5 mt-5 flex justify-around'>
            <div>
              <input type="range" min={6} max={20} onChange={(e) => {setLength(e.target.value)}} className='cursor-pointer' /> <label> Length: {length}</label>
            </div>
            <div>
              <input type="checkbox" onChange={() => {setNumbersAllowed((prev) => !prev)}} className='cursor-pointer' />
              <label> Numbers </label>
            </div>
            <div>
              <input type="checkbox" onChange={() => {setCharactersAllowed((prev) => !prev)}} className='cursor-pointer' />
              <label> Special Characters </label>
            </div>


          </div>
        </div>
      </div>

    </>
  )
}

export default App
