import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from "./src/screens/MainScreen";
import ContactFormScreen from "./src/screens/ContactFormScreen";
import CatalogDetailsScreen from "./src/screens/catalog/CatalogDetailsScreen";
import CatalogsScreen from "./src/screens/catalog/CatalogsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="ContactForm" component={ContactFormScreen} />
          <Stack.Screen name="Pokemons" component={CatalogsScreen} />
          <Stack.Screen name="Details" component={CatalogDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


