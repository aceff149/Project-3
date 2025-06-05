import React, {useState} from 'react'

export default function RegistrationSingleState({ students,setStudents}) {

  const [formData, setFormData] = useState({
    firstName:"",
    lastName: "" ,
    tel: "506-999-9999"
  })

  console.log (students)
  function handleChange (event) {
    // console.log (event.target)
    // console.log (event.target.name)
    // console.log (event.target.value)
    const {name, value } = event.target
    setFormData ({...formData, [name]:value})

  }

  function handleSubmit () {
    console.log (formData)
    setStudents ([...students, formData])
  }

  return (
    <>
      <h1>User Registration Form</h1>
      <label>FirstName:
        <input type="text" name="firstName" onChange={handleChange} ></input>
      </label><br/>

      <label>LastName:
        <input type="text" name="lastName" onChange={handleChange} ></input>
      </label><br/>

      <label>Tel:
        <input type="text" name="tel" onChange={handleChange} ></input>
      </label>

      <button onClick={handleSubmit} >SUBMIT</button>
    </>
  )
}