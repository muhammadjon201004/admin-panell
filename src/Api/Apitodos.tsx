import React, { useEffect, useState } from 'react'

export default function ApiTodos() {
  interface todos {
    id: number,
    title: string,
    completed: boolean
  }
    const [api, setApi] = useState<todos[]>([]); 
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json: todos[]) => setApi(json));
    }, []);
    return api
};