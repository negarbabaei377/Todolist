const TodoComponent = (props) => {
    return ( 
        <div className="todo">
        <div onClick={props.onCompleteHandler} 
             className={`todoText ${props.todo.isCompleted && "completed"}`}>{props.todo.text}</div>
        <div>
            <button className="btn" onClick={props.onEdit}>Edit</button>
            <button className="btn remove" onClick={props.deleteHandler}>Delete</button>
        </div>
    </div>

     );
}

export default TodoComponent;