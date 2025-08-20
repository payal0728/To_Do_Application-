import React,{createContext, useEffect, useReducer} from 'react'
import {initialState, reducer} from '../reducers/todoReducer'

const ToDoContext = createContext()

const ToDoProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer,initialState,(init)=>{
        try{
           toDoFromLocal = JSON.parse(localStorage.getItem('todosBatch51'))
           return toDoFromLocal.todos;
        }catch{
            return init;
        }
    })

  useEffect(()=>{
    localStorage.setItem('todosBatch51',JSON.stringify(state));
  })

  return (
    <div>
      <ToDoContext.Provider value ={{state,dispatch}}>
        {children}
      </ToDoContext.Provider>
    </div>
  )
}

export {ToDoContext, ToDoProvider}
          