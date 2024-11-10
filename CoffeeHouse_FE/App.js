import "@expo/metro-runtime";
import Auth from "./src/routers/router";
import React from "react";

if (typeof setImmediate === "undefined") {
  global.setImmediate = (fn) => {
    return setTimeout(fn, 0);
  };
}
export default Auth
