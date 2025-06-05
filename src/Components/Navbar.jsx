import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Search({students, setStudents}) {
  const [searchState, setSearchState] = useState("")

  function handleClick () {
    console.log (searchState)
    const result = students.filter ((student)=>student.firstName.includes(searchState))
    console.log (result)
    setStudents(result)
  }

  return (
    <div className="mb-3 mt-3 w-50 mx-auto"> 
      <InputGroup>
        <Form.Control
          placeholder="Search Student Name"
          onChange={(event)=>setSearchState(event.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={handleClick}>
          Search
        </Button>
      </InputGroup>
    </div>
  )
}