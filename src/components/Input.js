import { useState } from "react";



const Input = ({addItem}) => {
  const arrList = [];
  const inputChange = (e) => {
    setInpVal((state) => e.target.value);
  };
  const [inpVal, setInpVal] = useState("");
  // const addItem = () => {
  //   arrList.push(inpVal);
  //   setInpVal("");
  //   // const inputVal = Input.value;

  //   console.log(arrList);
  // };


  return (
    <>
      <input value={inpVal} onInput={inputChange} type="text"></input>
      <button onClick={addItem(inpVal)}>Dodaj!</button>
    </>
  );
};
export default Input;
