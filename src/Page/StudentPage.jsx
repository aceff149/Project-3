import React, {useState} from 'react'
import ListStudents from './StudentPage'

export default function StudentPage() {
  const [students, setStudents] = useState([{
   id: 0,
   firstName: 'Robert',
   lastName: 'Tylor',
   email: 'farnaz.towhidi@quickstart.com',
   image: 'robert.jpg',
   tel:'999-999-9999',
   comments: 'Looking forward to learning more!'
 }, {
   id:1,
   firstName: 'Joshua',
   lastName: 'Pierson',
   email: 'Josh@quickstart.com',
   image: 'joshua.jpg',
   tel:'999-999-9999',
   comments: 'Looking forward to learning more!'
 },
{
   id:2,
   firstName: 'Allie',
   lastName: 'Efferson',
   email: 'Alli@quickstart.com',
   image: 'joshua.jpg',
   tel:'999-999-9999',
   comments: 'Looking forward to learning more!'
 }]);

  return (
    <>
      <div>Student Page</div>
      <ListStudents students={students} setStudents={setStudents} />
    </>
  )
}