import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={clickHandler}>Increment</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
