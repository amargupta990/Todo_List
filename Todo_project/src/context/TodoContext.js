import { createContext,useContext } from "react";
//created todo context...with default value
export const TodoContext=createContext({
    todos:[
       {
        id:1,
        todo:"todoMsg",
        completed:false,
       }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{},
});
//exported todocontext...
export const useTodo=()=>{
       return useContext(TodoContext);
}
//exported context provider...
export const TodoProvider=TodoContext.Provider