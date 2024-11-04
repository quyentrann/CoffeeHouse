import "@expo/metro-runtime"
import { NavigationContainer } from "@react-navigation/native";
import Auth from "./src/routers/router";

if (typeof setImmediate === 'undefined') {
  global.setImmediate = (fn) => {
    return setTimeout(fn, 0);
  };
}
export default () => (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
);
