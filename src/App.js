import React, { useState, useEffect } from "react";
import ToDoForm from "./Components/ToDoForm/ToDoForm";
import ToDoList from "./Components/ToDoList/ToDoList";
import ToDoFooter from "./Components/ToDoFooter/ToDoFooter";

const App = () => {
  const [listOfToDo, setListOfToDo] = useState(() => {
    const saved = localStorage.getItem("todos");
    const initial = JSON.parse(saved);
    return initial || "";
  });
  const [numOfTasks, setNumOfTasks] = useState(() => {
    const saved = localStorage.getItem("todos");
    const initial = JSON.parse(saved);
    return initial.length || 0;
  });

  const incrementNumOfTasks = () => {
    setNumOfTasks(listOfToDo.length + 1);
  };

  const decrementNumOfTasks = () => {
    setNumOfTasks(listOfToDo.length - 1);
  };

  const addItemToList = (todo) => {
    setListOfToDo((prevstate) => {
      const updatedList = [...prevstate];
      updatedList.unshift(todo);
      incrementNumOfTasks();
      return updatedList;
    });
  };

  const deleteAll = () => {
    setListOfToDo([]);
    setNumOfTasks(0);
  };

  const deleteItem = (id) => {
    setListOfToDo((prev) => {
      const updatedList = prev.filter((todo) => todo.id !== id);
      decrementNumOfTasks();
      return updatedList;
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(listOfToDo));
  }, [listOfToDo]);

  return (
    <div className="">
      <ToDoForm addItemToList={addItemToList} />
      <ToDoList todos={listOfToDo} deleteItem={deleteItem} />
      <ToDoFooter numOfTasks={numOfTasks} deleteAllHandler={deleteAll} />
    </div>
  );
};

export default App;
