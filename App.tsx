// App.js
import React from 'react';
import LoginScreen from './src/screens/loginModule/LoginScreen';
import HomeScreen from './src/screens/homeModule/HomeScreen';
import ServiceDetailScreen from './src/screens/homeModule/TourDetailScreen'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import IntroduceScreen from './src/screens/homeModule/IntroduceScreen';
import ServiceScreen from './src/screens/homeModule/ServiceScreen';
import InformationDetailScreen from './src/screens/homeModule/InformationDetailScreen';
import RegisterScreen from './src/screens/loginModule/RegisterScreen';

const StackNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='ServiceDetail' component={ServiceDetailScreen} />
      <Stack.Screen name='InformationDetail' component={InformationDetailScreen} />
    </Stack.Navigator>
  );
};

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3A6D8C',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}
    >
      <Drawer.Screen options={{ headerShown: false, title: 'Trang chủ' }} name='Home' component={StackNav} />
      <Drawer.Screen options={{ headerShown: false, title: 'Giới thiệu' }} name='Introduce' component={IntroduceScreen} />
      <Drawer.Screen options={{ headerShown: false, title: 'Dịch vụ' }} name='Service' component={ServiceScreen} />
    </Drawer.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}

export default App;
