import React, { useEffect, useState } from "react";
import { useApi } from "useapi";
import { apiStatus } from "useapi/constant/constant";

export default function GetExample() {
  const [getApiExample, callGetApi] = useApi({
    url: "https://dummyjson.com/posts",
    method: "GET",
  }); // here for method -> "get", "GEt", "gEt" is also acceptable.
  const [myResult, setMyResult] = useState({});

  useEffect(() => {
    if (getApiExample?.state === apiStatus.success) {
      // API get successful 🌟
      setMyResult(getApiExample?.value);
    }
  }, [getApiExample?.state]);

  function fetchDetails() {
    callGetApi();
  }

  return (
    <>
      <div>Hello this is one of the best way for api calls</div>
      <button onClick={fetchDetails}>Click me for Api call</button>
      {/* To show loading in the page while API is in pending state */}
      {getApiExample?.state === apiStatus?.pending && <div>Loading</div>}
      <br></br>
      <hr></hr>
      <h1>API Result</h1>
      {getApiExample?.state !== apiStatus?.pending && (
        <div>{JSON.stringify(myResult)}</div>
      )}
    </>
  );
}
