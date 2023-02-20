const ToDoFooter = (props) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <p>
        You have{" "}
        <span className=" text-violet-500 font-bold">{props.numOfTasks}</span>{" "}
        pending tasks
      </p>
      <button
        className="rounded-md bg-violet-600 text-white py-2 px-2 font-medium hover:bg-violet-500"
        onClick={props.deleteAllHandler}
      >
        Clear All
      </button>
    </div>
  );
};

export default ToDoFooter;
