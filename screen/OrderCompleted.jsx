import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import Screen from '../components/Screen';
import LottieView from 'lottie-react-native';
import OrderedFoodItems from '../components/RestaurantDetails/OrderedFoodItems';


const OrderCompleted = ({ route }) => {
    console.log("LastOrder", route.params.data.items);
    const lastOrder = route.params.data.items
    // const [lastOrder, setLastOrder] = useState([])
    const { items, restaurantName } = useSelector(
        (state) => state.cartReducer.selectedItems
    );
    const total = items
        .map((item) => Number(item.price))
        .reduce((prev, curr) => prev + curr, 0);

    const totalTaka = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });
    return (
        <Screen style={{ backgroundColor: "white" }}>
            <View>
                <LottieView
                    style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
                    source={require('../assets/animations/check-mark.json')}
                    autoPlay
                    loop={false}
                    speed={0.5}
                />
            </View>
            <Text style={{ fontSize: 20, fontWeight: "bold", padding: 15 }}>
                Your order at restaurant Name: {restaurantName} has been placed for: {totalTaka}
            </Text>
            <OrderedFoodItems foods={lastOrder} />
            <View>
                <LottieView
                    style={{ height: 200, alignSelf: "center", marginBottom: 30 }}
                    source={require('../assets/animations/cooking.json')}
                    autoPlay
                    speed={0.5}
                />
            </View>
        </Screen>
    )
}

export default OrderCompleted

const styles = StyleSheet.create({})