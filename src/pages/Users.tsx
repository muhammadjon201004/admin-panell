import React, { useEffect, useState } from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Select,
  SelectItem,
} from "@heroui/react";
import { Input } from "@heroui/input";


function Users() {
  interface Todo {
    id: number,
    name: string,
    username: string,
    email: string
  }
  const [users, setUsers] = useState<Todo[]>([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json: Todo[]) => setUsers(json));
  }, []);
  const [searchPan, setSearchPan] = useState<string>("")
  const animals = [
    { key: "name", label: "name" },
    { key: "username", label: "UserName" },
    { key: "email", label: "email" },
  ];

  const serchProduct = users.filter((item) => 
      item.name.toLowerCase().includes(searchPan.toLowerCase())
  )
  console.log(serchProduct);
  


  console.log(searchPan);


  return (
    <div>
      <div className='flex g-0 justify-center items-center h-[50px] my-3.5 gap-2'>

        <Input label="search" type="name" className='text-center mt-3.5 max-w-[600px]  mt-3.5 h-[50px] mb-2.5' onChange={(e) => setSearchPan(e.target.value)} value={searchPan} />

      </div>
      <Table aria-label="Example empty table">
        <TableHeader>
          <TableColumn className='text-blue-600'>Id</TableColumn>
          <TableColumn className='text-blue-600'>Name</TableColumn>
          <TableColumn className='text-blue-600'>USerName</TableColumn>
          <TableColumn className='text-blue-600'>email</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No rows to display."}>
          {serchProduct.map((user) => (
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
