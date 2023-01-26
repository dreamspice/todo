import React from "react";

const ToDoInput = React.forwardRef((props, ref) => {
  return (
    <input
      type="text"
      placeholder="Add your new todo"
      className="border-2 border-gray-400 py-2 px-2 rounded-md focus:border-violet-500 focus:outline-none placeholder:text-italic w-64"
      id={props.label}
      ref={ref}
      maxLength="24"
      required
    ></input>
  );
});

export default ToDoInput;
