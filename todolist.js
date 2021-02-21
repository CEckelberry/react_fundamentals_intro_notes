const TodoList = (props) => {
    //Hard CODED Way 
    // const todos = [
    //     <li>Walk Chickens</li>,
    //     <li>Feed Chickens</li>,
    //     <li>Eat Chickens</li>
    // ]
    

    return (
        <div>
            <h4>Todo List</h4>
            <ul>{props.todos.map(t => <li>{t}</li>)}</ul>
        </div>
    )
}