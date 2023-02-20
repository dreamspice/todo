import { AiFillDelete } from "react-icons/ai";

const ToDoItem = (props) => {
  const deleteItemHandler = () => {
    return props.deleteItem(props.id);
  };

  return (
    <div className="flex items-stretch w-full">
      <li className="bg-gray-100 py-2 px-2 font-medium mb-2 w-full rounded-l-md initial break-all">
        {props.children}
      </li>
      <button
        className=" bg-red-500 mb-2 py-3 px-4 rounded-r-md hover:bg-red-400"
        onClick={deleteItemHandler}
      >
        <AiFillDelete className="scale-125 text-white" />
      </button>
    </div>
  );
};

export default ToDoItem;
