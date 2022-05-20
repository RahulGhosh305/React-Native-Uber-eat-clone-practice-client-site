import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import HeaderTab from '../components/Home/HeaderTab'
import Screen from '../components/Screen'
import SearchBar from '../components/Home/SearchBar'
import Categories from '../components/Home/Categories'
import RestaurantItems from '../components/Home/RestaurantItems'
import ButtomTabs from '../components/Home/ButtomTabs'
import { Divider } from 'react-native-elements'


const Home = ({ navigation }) => {
    const [restaurantData, setRestaurantData] = useState([])
    const [country, setCountry] = useState("");
    const [activeTab, setActiveTab] = useState("Delivery")

    const getRestaurantsFrom = () => {
        fetch(`http://192.168.0.103:3000/resdatapost?country=${country ? country : "Bangladesh"}`)
            .then(res => res.json())
            .then(data => {
                setRestaurantData(data)
                // console.log(data)
            })
    };

    useEffect(() => {
        getRestaurantsFrom()
    }, [country])
    // console.log(restaurantData);
    const onPressInputHandle = (countyName) => {
        setCountry(countyName)
    }
    return (
        <Screen style={styles.homeScreen}>
            <View style={{ backgroundColor: "#fff", paddingTop: 15, marginTop: 5 }}>
                <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar onPressInputHandle={onPressInputHandle} />
            </View >
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
            </ScrollView>
            <Divider width={1} />
            <ButtomTabs />
        </Screen >
    )
}

export default Home;

const styles = StyleSheet.create({
    homeScreen: {
        backgroundColor: "#eee"
    }
})