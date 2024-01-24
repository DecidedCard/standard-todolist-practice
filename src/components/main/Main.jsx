import React, { useState } from "react";
import InputForm from "./InputForm";

function Main() {
  const [contents, setContents] = useState([]);
  return (
    <>
      <section>
        <InputForm setContents={setContents} />
      </section>
      <section></section>
    </>
  );
}

export default Main;
