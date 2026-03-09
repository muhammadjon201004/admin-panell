import React, { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Checkbox, Button, ButtonGroup } from "@heroui/react";
import ApiPosts from '@/Api/Api';
import ApiTodos from '@/Api/Apitodos';
function Todo() {
  const [todosItem, setTodosItem] = useState<number>(15);
  const [sort, setSort] = useState<string>("all");
  const [filterId, setFilterId] = useState<boolean | "all">("all")

  return (

    <div>
      <ButtonGroup className='ml-[40%] my-3.5'>
        <Button onClick={() => setFilterId("all")}>Всё</Button>
        <Button onClick={() => setFilterId(true)}>Выполненые</Button>
        <Button onClick={() => setFilterId(false)}>Не вып.</Button>
      </ButtonGroup>
      <div className='flex flex-wrap justify-center gap-[3%]'>


        {ApiTodos().slice(0, todosItem).map(item => (filterId == "all" || item.completed === filterId ?
          (<Card className="max-w-[400px] min-w-[400px] mb-3.5" key={item.id}>
            <CardHeader className="flex gap-3">
              <div className="m-auto">
                <Button color="primary" className={item.completed ? 'bg-green-700' : 'bg-red-600'}>{item.completed ? 'выполнина' : 'не выполнина'}</Button>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <h3 className='m-auto'>{item.id}</h3><p className="text-md text-center">{item.title}</p>
            </CardBody>
          </Card>) : (<></>)
        )     )}



      </div>
      <Button className='ml-[47%]' color="primary" variant="shadow" onClick={() => setTodosItem((item) => item + 15)}>
        plus 10
      </Button>
    </div>
  )
}

export default Todo
