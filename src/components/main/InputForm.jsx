import React from "react";

function InputForm({ setContents }) {
  const onSubnitHandler = (e) => {
    e.preventDefault();

    if (e.target.title.value === "" || e.target.content.value === "") {
      return alert("내용을 입력해주시기 바랍니다.");
    }
    const content = {
      id: Date.now(),
      title: e.target.title.value,
      content: e.target.content.value,
      isDone: false,
    };

    setContents((prev) => [content, ...prev]);
    e.target.reset();
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
