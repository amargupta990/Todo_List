import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context'
import { TodoForm, TodoItem } from './component';

function App() {
  //state for todos [todo1,todo2...]
  const [todos, setTodos] = useState([]);
  //addedtodo..
  const addTodo=(todo)=>{
      setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }
  //updated todo...
   const updateTodo=(id,todo)=>{
      setTodos((prev)=>prev.map((prevtodo)=>((prevtodo.id===id)? todo:prevtodo)))
  }
  //deleted todo..
   const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }
  // toggoled todo..
   const toggleComplete=(id)=>{
      setTodos((prev)=>prev.map((prevtodo)=>prevtodo.id===id? {...prevtodo,completed:!prevtodo.completed} :prevtodo))
  }
  //getitems from local storage..
  useEffect(()=>{
     const todos = JSON.parse(localStorage.getItem("todos"))
     if(todos&&todos.length>0){
         setTodos(todos)
     }
  },[])
  //setitems in loacl storage..
  useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <TodoProvider value={{todos ,addTodo ,updateTodo,deleteTodo,toggleComplete}}>
          <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                             <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
