import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  return (
    <ul className="mt-2 flex flex-col justify-center items-center w-full">
      {props.todos.map((todo) => (
        <ToDoItem key={todo.key} id={todo.key} deleteItem={props.deleteItem}>
          {todo.text}
        </ToDoItem>
      ))}
    </ul>
  );
};

export default ToDoList;
