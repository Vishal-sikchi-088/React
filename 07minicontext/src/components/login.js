import UserContext from "../context/userContext"
import React, {useState, useContext} from 'react'


function Login() {
    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(UserContext)
    
    const handleLogin = (e) => {
        e.preventDefault()
        setUser({username,password})
    }

    return (
        <div>
             <h1>Login</h1>
             <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
             <input type="text" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} ></input>
             <button onClick={handleLogin}>Login</button>

        </div>
       
    )
}

export default Login
