import Click from "./Components/Click";
import Counter from "./Components/Counter";
import ParentComp from "./Components/ParentComp";
import ClassProps from "./Components/ClassProps";
import FunctionProps from "./Components/FunctionProps";

function App() {
  return (
    <div className="App">
      {/* <Click />
      <Counter />
      <ParentComp /> */}
      <ClassProps name="Raghad" place="Paris">
        <button>Click</button>
      </ClassProps>
      <ClassProps name="Anas" place="London" />
      <ClassProps name="Baby" place="USA!" />
      <FunctionProps name="Raghad Again" place="Spain" />
    </div>
  );
}

export default App;
