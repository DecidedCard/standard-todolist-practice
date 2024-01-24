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
    if (window.confirm("삭제하시겠습니까?")) {
      const newContents = contents.filter((todo) => {
        return todo.id !== id;
      });
      setContents(newContents);
    }
  };

  return (
    <section className="contents">
      <h2>{isActive ? "Working" : "Done"}</h2>
      <ul className="todolist">
        {contents.map((i) => {
          if (i.isDone === isActive) {
            return false;
          }
          return (
            <li className="todo" key={i.id}>
              <p>{i.title}</p>
              <p>{i.content}</p>
              <p>
                <button onClick={() => onDeleteBtn(i.id)}>삭제하기</button>
                <button onClick={() => onToggleBtn(i.id)}>
                  {i.isDone ? "취소" : "완료"}
                </button>
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ToddList;
