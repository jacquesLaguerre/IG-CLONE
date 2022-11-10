import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./scenes/Details";
import Feed from "./scenes/Feed";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Feed'>
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Post Details" component={Details} />
        </Stack.Navigator>
        <StatusBar style="auto" />
     
    </NavigationContainer>
  );
}
