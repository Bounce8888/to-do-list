import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input";



function App() {

const [list, setList] = useState([]);

  pushItemToList = (item) => {
    setList((state) => state.push(item))
  }



  return (
    <>
      <Input addItem={pushItemToList}></Input>
    </>
  );
}

export default App;
