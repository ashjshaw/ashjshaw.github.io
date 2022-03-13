import { useState } from "react";
import { ToDoForm, TaskButton, ToDoItem, ToDoWrapper } from "./ToDoList.css";

export default function ToDoList() {
  const [input, setInput] = useState("");

  const [toDo, setToDo] = useState([
    { description: "Make to do List"},
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    if (input === "") {
      return null;
    }
    setInput('');
    let newList = [
      {
        description: input
      },
      ...toDo,
    ];
    setToDo(newList);
  }
  
  function removeTask(e, index) {
    e.preventDefault()

    let newList = [...toDo];
    newList.splice(index, 1)
    setToDo(newList);
  }
  return (
    <ToDoWrapper>
    <ToDoForm>
      <h1>To do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
      <button onClick={handleSubmit}>AddTask</button>
      <ul>
        {toDo.map((item, index) => {
          return (
            <ToDoItem key={index}>
              <li>{item.description}</li>
              <TaskButton onClick={(e)=>removeTask(e, index)}>X</TaskButton>
            </ToDoItem>
          );
        })}
      </ul>
    </ToDoForm>
    </ToDoWrapper>
  );
}
