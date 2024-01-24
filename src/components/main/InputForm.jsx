import React from "react";

function InputForm({ setContents }) {
  const onSubnitHandler = (e) => {
    e.preventDefault();
    const content = {
      id: Date.now(),
      title: e.target.title.value,
      content: e.target.content.value,
      isDone: false,
    };

    e.reset();
    setContents((prev) => [content, ...prev]);
  };
  return (
    <form onSubmit={onSubnitHandler}>
      <input type="text" placeholder="제목" name="title" />
      <input type="text" placeholder="내용" name="content" />
      <button type="submit">추가하기</button>
    </form>
  );
}

export default InputForm;
