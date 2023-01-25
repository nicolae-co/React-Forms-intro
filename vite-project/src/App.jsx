
import './App.css'
import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  })

  console.log(formData)

  function handleChange(event) {
    setFormData(prevState => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    })
  }


  return (
    <form>
        <input
          type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        />
        <input
          type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        />
        <input
          type="text"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        />
    </form>
  )
}

export default App
