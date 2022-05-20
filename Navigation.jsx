import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/Home'
import RestaurantDetail from './screen/RestaurantDetail'

import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/store'
import OrderCompleted from './screen/OrderCompleted';
const store = configureStore()


const Navigation = () => {
    const Stack = createNativeStackNavigator();

    const screenOption = {
        headerShown: false
    }

    return (
        <ReduxProvider store={store} >
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home' screenOptions={screenOption} >
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
                    <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider >
    )
}
export default Navigation
