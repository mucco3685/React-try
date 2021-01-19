import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUP = () => {
    setNum(num + 1);
  };

  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      {/* <ColorfulMessage color="pink" message="お元気です!" /> */}
      <button onClick={onClickCountUP}></button>
      <p>{num}</p>
    </>
  );
};

export default App;