import "@expo/metro-runtime"
import { NavigationContainer } from "@react-navigation/native";
import Auth from "./src/routers/router";

export default () => (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
);
