import React, { useState } from "react";
import InputForm from "./InputForm";
import TodoList from "./TodoList";

function Main() {
  const [contents, setContents] = useState([]);
  return (
    <>
      <section>
        <InputForm setContents={setContents} />
      </section>
      <section>
        <TodoList
          contents={contents}
          setContents={setContents}
          isActive={true}
        />
        <TodoList
          contents={contents}
          setContents={setContents}
          isActive={false}
        />
      </section>
    </>
  );
}

export default Main;
