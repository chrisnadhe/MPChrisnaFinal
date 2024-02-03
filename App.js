import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import HomeScreen from './Screens/HomeScreen';
import MapsScreen from './Screens/MapsScreen';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const SCREENS = {
  HOME: 'Home',
  MAPS: 'Maps',
};

const MapsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MapsStack" component={MapsScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name={SCREENS.HOME}
              component={HomeScreen}
              options={{
                tabBarIcon: ({color}) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name={SCREENS.MAPS}
              component={MapsStack}
              options={{
                tabBarIcon: ({color}) => (
                  <MaterialCommunityIcons name="google-maps" color={color} size={26} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
