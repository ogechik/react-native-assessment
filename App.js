import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from "./src/screens/MainScreen";
import ContactFormScreen from "./src/screens/ContactFormScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="ContactForm" component={ContactFormScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


