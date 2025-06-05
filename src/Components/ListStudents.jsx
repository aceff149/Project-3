import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function ListStudents({students,setStudents}) {

  function handleDelete (event, studentIndex) {
    console.log (event)
    console.log (studentIndex)
    // const result = students.filter (student=>student.firstName=='Joshua')
    // setStudents(result)
    const result = students.filter (student=>student.id!==studentIndex)
    setStudents(result)
  }

  return (
    <>
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student,index)=>(
          <tr>
            <td>{index}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td><Button variant="danger" onClick={(event)=>(handleDelete(event, index))}>DELETE</Button></td>
          </tr>
        ))}
        
      </tbody>
    </Table>
    </>
  )
}


export default ListStudents;