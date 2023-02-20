import React, { useState, useEffect } from "react";
import ToDoForm from "./Components/ToDoForm/ToDoForm";
import ToDoList from "./Components/ToDoList/ToDoList";
import ToDoFooter from "./Components/ToDoFooter/ToDoFooter";

const App = () => {
  const [listOfToDo, setListOfToDo] = useState(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      const initial = JSON.parse(saved);
      return initial;
    } else {
      return [];
    }
  });

  const [numOfTasks, setNumOfTasks] = useState(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      const initial = JSON.parse(saved);
      return initial.length;
    } else {
      return 0;
    }
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
    localStorage.removeItem("todos");
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
  }, [listOfToDo, numOfTasks]);

  return (
    <main
      className="w-[90%] md:w-2/3 lg:w-[50%] xl:w-[40%]
    absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 bg-white p-6 rounded-lg"
    >
      <ToDoForm addItemToList={addItemToList} />
      <ToDoList todos={listOfToDo} deleteItem={deleteItem} />
      <ToDoFooter numOfTasks={numOfTasks} deleteAllHandler={deleteAll} />
    </main>
  );
};

export default App;
