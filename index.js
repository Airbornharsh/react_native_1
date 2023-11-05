/**
 * @format
 */

import { AppRegistry } from "react-native";
// import App from './App';
import Count from "./Count";
import { name as appName } from "./app.json";
import NavigateApp from "./NavigateApp";

AppRegistry.registerComponent(appName, () => NavigateApp);
