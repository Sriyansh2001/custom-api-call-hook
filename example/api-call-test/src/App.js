import { useEffect, useState } from "react";
import GetExample from "./example/GetExample";
import PostExample from "./example/PostExample";

function App() {
  const [exampleType, setExampleType] = useState(0);

  function toggleExample() {
    setExampleType(!exampleType);
  }

  return (
    <>
      <h1> {exampleType ? "Get api example" : "Post api example"}</h1>
      <div>
        <button onClick={toggleExample}>Change example type</button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      {exampleType ? <GetExample /> : <PostExample />}
    </>
  );
}

export default App;
