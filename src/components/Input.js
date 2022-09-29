import { useState } from "react";
const Input = () => {
  const inputChange = (e) => {
    setInpVal((state) => e.target.value);
  };
  const [inpVal, setInpVal] = useState("");
  const addItem = () => {
    // const inputVal = Input.value;

    console.log(inpVal);
  };
  return (
    <>
      <input onInput={inputChange} type="text"></input>
      <button onClick={addItem}>Dodaj!</button>
    </>
  );
};
export default Input;
