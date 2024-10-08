import { useCallback, useState } from 'react'


function App() {
  let [length, setLength] = useState(8);
  let [numbersAllowed, setNumbersAllowed] = useState(false);
  let [charactersAllowed, setCharactersAllowed] = useState(false);
  let [password, setPassword] = useState("");

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


  }, [length, numbersAllowed, charactersAllowed, setPassword])


  return (
    <>
      <div className='my-5 text-5xl text-center text-orange-400'>Password Generator</div>
      <div className='flex bg-slate-400 my-10 mx-auto'>
        <input 
        type="text" 
        value={password}
        />



      </div>

    </>
  )
}

export default App
