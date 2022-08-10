import TodoComponent from "./Todo.component";
import TodoFormComponent from "./TodoForm.component";
import { useState } from "react";

const TodolistComponent = (props) => {
    const [edit , setEdit] = useState({id : null , text :"" , isCompleted : false});

    const editTodoHandler=(newValue)=>{
        props.updateTodo(edit.id , newValue);
        setEdit({id:null , text:""})
    }
    if(props.todos.length === 0){
        return <p>add some todos</p>
    }
    return(
        <div>{edit.id ? <TodoFormComponent submitTodo={editTodoHandler} edit={edit}/> : props.todos.map(todo=>{
            return( 
                <TodoComponent key={todo.id} 
                               todo={todo} 
                               onCompleteHandler={()=>props.onCompleteHandler(todo.id)} 
                               deleteHandler={()=>props.deleteHandler(todo.id)}
                               onEdit={()=>setEdit(todo)}/>
            )
            })}
        </div>
    )
}
export default TodolistComponent;