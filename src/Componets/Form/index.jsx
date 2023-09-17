import {useState} from 'react'

const Form = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <div>
       <input type="text" placeholder="User Name " value={username} onChange= {(e)=> {
    setUsername(e.target.value);
       }}
       />
        <input type="text" placeholder="Email " value={email} onChange= {(e)=> {
    setEmail(e.target.value);
       }}
       />
        <input type="text" placeholder="Password " value={password} onChange= {(e)=> {
    setPassword(e.target.value);
       }}
       />



    </div>
  )
}

export default Form