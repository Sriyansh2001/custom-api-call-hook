import React, { useEffect, useState } from "react";
import { useApi } from "useapi";
import { apiStatus } from "useapi/constant/constant";

export default function PostExample() {
  const [postApiExample, invokePostApi] = useApi({
    url: "https://dummyjson.com/posts/add",
    method: "POST",
  }); // here for method -> "get", "GEt", "gEt" is also acceptable.
  const [myResult, setMyResult] = useState({});
  const [value, setValue] = useState("");

  useEffect(() => {
    if (postApiExample?.state === apiStatus.success) {
      // API get successful 🌟
      setMyResult(postApiExample?.value);
    }
  }, [postApiExample?.state]);

  function fetchDetails() {
    invokePostApi({ payload: { title: value, userId: 5 } });
  }

  return (
    <>
      <div>Hello this is one of the best way for api calls</div>
      <div>input value that you want to send as payload</div>
      <input value={value} onChange={(e) => setValue(e?.target?.value)}></input>
      <button onClick={fetchDetails}>Click me for Api call</button>
      {/* To show loading in the page while API is in pending state */}
      {postApiExample?.state === apiStatus?.pending && <div>Loading</div>}
      <br></br>
      <hr></hr>
      <h1>API Result</h1>
      {postApiExample?.state !== apiStatus?.pending && (
        <div>{JSON.stringify(myResult)}</div>
      )}
    </>
  );
}
