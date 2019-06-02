import { createStackNavigator, createAppContainer } from 'react-navigation';
import { HomeScreen } from '../../screens';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
});

const App = createAppContainer(MainNavigator);

export default App;
