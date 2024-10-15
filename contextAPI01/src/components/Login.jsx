import React, { useContext, useState } from 'react'
import UserContext from '../context/userContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }


  return (
    <>
        <div className='flex gap-2'>
            <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button 
                className='bg-blue-400 py-2 px-4'
                onClick={handleSubmit}
            >Login</button>
        </div>
    </>
  )
}

export default Login