import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screen/homeScreen';
import Search from './src/screen/searchScreen';
import Result from './src/screen/resultScreen';

import HomeHeader from './src/component/header/homeHeader';
import SearchHeader from './src/component/header/searchHeader';
import ResultHeader from './src/component/header/resultHeader';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{header: HomeHeader}}/>
        <Stack.Screen name="Search" component={Search} options={{header: SearchHeader}}/>
        <Stack.Screen name="Result" component={Result} options={{header: ResultHeader}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;