import { useEffect, useState } from "react";
import TodoFormComponent from "./TodoForm.component";
import TodolistComponent from "./Todolist.component";
import NavbarComponent from './Navbar.component'
import '../App.css'

const TodoAppComponent = () => {
    const [todos , setTodos] = useState([]);
    const [status , setStatus] = useState("All")
    const [filteredTodos , setFilteredTodos] = useState([]);

    useEffect(()=>{
        filterTodos(status)
    },[todos , status])

    const addTodoHandler =(input)=>{
        const newTodo = {id : Math.floor(Math.random() * 1000) ,
                         text : input ,
                         isCompleted : false ,
                        }
        setTodos([...todos , newTodo])
    }
    const onCompleteHandler =(id)=>{
        const index = todos.findIndex(todo=>todo.id === id)
        // clone : for do not mutate
        const selectedtodo = {...todos[index]}
        selectedtodo.isCompleted = !selectedtodo.isCompleted;
        const updatedTodos = [...todos]
        updatedTodos[index] = selectedtodo;
        setTodos(updatedTodos);
    }
    const deleteHandler=(id)=>{
        const filter = todos.filter(todo=>todo.id != id)
        setTodos(filter)
    }
    const updateTodo=(id , newValue)=>{
        const index = todos.findIndex(todo=>todo.id === id)
        const selectedtodo = {...todos[index]}
        selectedtodo.text = newValue;
        const updatedTodos = [...todos]
        updatedTodos[index] = selectedtodo;
        setTodos(updatedTodos);

    }
    const filterTodos =(status)=>{
        switch(status){
            case 'Completed' :
                setFilteredTodos(todos.filter(item=>item.isCompleted))
                break;
            case 'Uncompleted':
                setFilteredTodos(todos.filter(item=>!item.isCompleted))
                break;
            default:
                setFilteredTodos(todos)
        }
    }
    const selectHandler =(e)=>{
        setStatus(e.target.value);
        filterTodos(e.target.value);
    }
    return (
        <div className="container">
            <NavbarComponent unCompletedTodos={todos.filter(item=>!item.isCompleted).length} 
                             selectHandler={selectHandler}
                             status={status}
                            />
            <TodoFormComponent submitTodo={addTodoHandler}/>
            <TodolistComponent todos={filteredTodos} 
                               onCompleteHandler={onCompleteHandler} 
                               deleteHandler={deleteHandler}
                               updateTodo={updateTodo}/>
        </div>
    );
}
export default TodoAppComponent;