import React, { useEffect, useState } from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";


function Users() {
interface Todo {
  id: number,
  name: string,
  username: string,
  email:string
}
  const [users, setUsers] = useState<Todo[]>([]); 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json: Todo[]) => setUsers(json));
  }, []);



  return (
    <div> 
      <Table aria-label="Example empty table">
        <TableHeader>
          <TableColumn className='text-blue-600'>Id</TableColumn>
          <TableColumn className='text-blue-600'>Name</TableColumn>
          <TableColumn className='text-blue-600'>USerName</TableColumn>
          <TableColumn className='text-blue-600'>email</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No rows to display."}>
        {users.map((user)=> (
          <TableRow key={user.id}>
          <TableCell>{user.id}</TableCell>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.username}</TableCell>
          <TableCell>{user.email}</TableCell>
        </TableRow>
        ))

        }
          </TableBody>
      </Table>
    </div>
  )
}

export default Users
