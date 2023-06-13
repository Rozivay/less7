import Main from "./Main"
import Home from "./Home"
import { useState } from "react";


function App() {
  const[count,setCount] = useState(0)
  console.log(count);
  return (
    <div >
     <Home count = {count} setCount = {setCount} />
      <Main count = {count} setCount = {setCount}/>
    </div>
  );
}

export default App;
