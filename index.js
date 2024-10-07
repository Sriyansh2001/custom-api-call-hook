import { useState } from "react";
import { apiStatus, GET_METHOD, POST_METHOD } from "./constant/constant.js";

export function useApi({ url, method }) {
  const [apiState, setApiState] = useState({
    state: apiStatus.idle,
    value: {},
    error: {},
  });

  async function fetchPostResult({
    payload,
    header = {
      "Content-Type": "application/json",
    },
  }) {
    try {
      setApiState({ ...apiState, state: apiStatus.pending });
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: header,
      });
      const jsonRespose = await response.json();
      setApiState({ state: apiStatus.success, value: jsonRespose });
    } catch (err) {
      setApiState({
        state: apiStatus.error,
        error: err,
      });
    }
  }

  async function fetchGetResult() {
    try {
      setApiState({
        ...apiState,
        state: apiStatus.pending,
      });
      const response = await fetch(url);
      const jsonRespose = await response.json();
      setApiState({
        state: apiStatus.success,
        value: jsonRespose,
      });
    } catch (err) {
      setApiState({
        state: apiStatus.error,
        error: err,
      });
    }
  }

  if (method.toUpperCase() === POST_METHOD) {
    return [apiState, fetchPostResult];
  } else if (!method || method.toUpperCase() === GET_METHOD) {
    return [apiState, fetchGetResult];
  }
}
