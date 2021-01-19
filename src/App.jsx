import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUP = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      {/* <ColorfulMessage color="pink" message="お元気です!" /> */}
      <button onClick={onClickCountUP}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      {faceShowFlag && <p>( ´Д`)y━･~~</p>}
    </>
  );
};

export default App;
