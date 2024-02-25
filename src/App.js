import React, { useState } from "react";
import ToDoInput from "./components/ToDoInput";
import Button from "./components/Button";
import List from "./components/List";

const initialState = [
  { id: 1, name: "Antrenmana git", completed: false },
  { id: 2, name: "Kitap oku", completed: false },
];

// Bootstrap Classes
const appClass = "card m-3 px-4 py-3";
const formClass = "d-flex";
const addButtonClass = "btn btn-primary mb-2";
const clearButtonClass = "btn btn-primary";

function App() {
  const [list, setList] = useState(initialState);
  const [newList, setNewList] = useState("");
  const addNew = (e) => {
    e.preventDefault();
    if (newList !== "") {
      setList([...list, { id: Date.now(), name: newList, completed: false }]);
      setNewList("");
    } else {
      alert("Lütfen bu alanı doldurunuz.");
    }
  };
  const markCompleted = (id) =>
    setList(
      list.map((elm) =>
        elm.id === id ? { ...elm, completed: !elm.completed } : elm
      )
    );
  const clearCompleted = () =>
    setList(list.filter((item) => (item.completed ? null : item)));
  return (
    <div className={appClass}>
      <h1>Yapılacaklar Listesi</h1>
      <form className={formClass}>
        <ToDoInput value={newList} handleChange={setNewList} />
        <Button className={addButtonClass} handleClick={addNew}>
          Ekle
        </Button>
      </form>
      <List list={list} handleClick={markCompleted} />
      <Button className={clearButtonClass} handleClick={clearCompleted}>
        Tamamlananları temizle
      </Button>
    </div>
  );
}

export default App;
