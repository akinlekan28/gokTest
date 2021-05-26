import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Welcome from '../screens/welcome/Welcome';
import Home from '../screens/home/Home';
import AnotherPage from '../screens/home/AnotherPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator initialRouteName="Root">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen
        name="AnotherPage"
        component={AnotherPage}
        options={{title: 'Another Page'}}
      />
    </Drawer.Navigator>
  );
};

function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            title: '',
            headerStyle: {
              shadowColor: 'transparent',
              backgroundColor: 'transparent',
            },
          }}
        />
        <Stack.Screen
          name="DrawerStack"
          component={DrawerStack}
          options={{
            title: '',
            headerStyle: {
              shadowColor: 'transparent',
              backgroundColor: 'transparent',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;
