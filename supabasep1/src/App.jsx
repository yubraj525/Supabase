import { useEffect,useState } from "react";


const App = () => {
  const [change, setChange] = useState(false);
  useEffect(() => {
    console.log('App component mounted');
  }
, [change]);
  console.log('App component rendered');
  return (
<button onClick={setChange(false)}> click me</button>
  )
}

export default App