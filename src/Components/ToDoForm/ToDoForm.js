import React, { useRef } from "react";

import ToDoButton from "./ToDoButton";
import ToDoInput from "./ToDoInput";
import ToDoLabel from "./ToDoLabel";

const ToDoForm = (props) => {
  const toDo = useRef();
  const label = "todo";
  const labelName = "Todo App";
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const toDoValue = toDo.current.value;
    const key = crypto.randomUUID();
    const newToDo = {
      text: toDoValue,
      key: key,
      id: key,
    };
    toDo.current.value = "";
    return props.addItemToList(newToDo);
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-col justify-center items-center"
    >
      <ToDoLabel label={label} labelName={labelName} />
      <div className="flex justify-center items-center mt-2">
        <ToDoInput label={label} ref={toDo} />
        <ToDoButton />
      </div>
    </form>
  );
};

export default ToDoForm;
