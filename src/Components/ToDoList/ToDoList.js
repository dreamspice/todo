import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  return (
    <ul className="w-[98%] rounded-md mt-2">
      {props.todos.map((todo) => (
        <ToDoItem key={todo.key} id={todo.key} deleteItem={props.deleteItem}>
          {todo.text}
        </ToDoItem>
      ))}
    </ul>
  );
};

export default ToDoList;
