import "../App.css"

const NavbarComponent = (props) => {
    if(!props.unCompletedTodos) return <h2 className="h2">set your today todos !</h2>
    return ( 
        <header>
            <span>{props.unCompletedTodos}</span><h2>are not completed</h2>
            <select className="select" onChange={props.selectHandler} value={props.status}>
                <option value="all">All</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
            </select>
        </header>
     );
}
export default NavbarComponent;