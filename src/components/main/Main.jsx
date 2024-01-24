import React, { useState } from "react";
import InputForm from "./InputForm";
import TodoList from "./TodoList";

function Main() {
  const [contents, setContents] = useState([]);
  return (
    <>
      <section className="content-add">
        <InputForm setContents={setContents} />
      </section>
      <TodoList contents={contents} setContents={setContents} isActive={true} />
      <TodoList
        contents={contents}
        setContents={setContents}
        isActive={false}
      />
    </>
  );
}

export default Main;
