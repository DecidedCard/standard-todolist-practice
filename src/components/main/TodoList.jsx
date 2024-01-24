import React from "react";

function ToddList({ contents, setContents, isActive }) {
  const onToggleBtn = (id) => {
    const check = contents.map((i) => {
      if (i.id === id) {
        return { ...i, isDone: !i.isDone };
      }
      return i;
    });

    setContents(check);
  };

  const onDeleteBtn = (id) => {
    const check = contents.filter((todo) => {
      return todo.id !== id;
    });
    setContents(check);
  };

  return (
    <>
      <h2>{isActive ? "Working" : "Done"}</h2>
      <ul>
        {contents.map((i) => {
          if (i.isDone === isActive) {
            return false;
          }
          return (
            <li key={i.id}>
              <p>{i.title}</p>
              <p>{i.content}</p>
              <button onClick={() => onDeleteBtn(i.id)}>삭제하기</button>
              <button onClick={() => onToggleBtn(i.id)}>
                {i.isDone ? "취소" : "완료"}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ToddList;
