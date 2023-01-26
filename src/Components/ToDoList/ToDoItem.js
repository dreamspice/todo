import { AiFillDelete } from "react-icons/ai";

const ToDoItem = (props) => {
  const deleteItemHandler = () => {
    return props.deleteItem(props.id);
  };

  return (
    <div className="flex items-center">
      <li className="bg-gray-100 py-2 px-2 font-medium mb-2 basis-[90%]">
        {props.children}
      </li>
      <button
        className=" bg-red-500 h-[2.5rem] mb-2 px-2 rounded-r-md hover:bg-red-400"
        onClick={deleteItemHandler}
      >
        <AiFillDelete className="scale-125 text-white" />
      </button>
    </div>
  );
};

export default ToDoItem;
