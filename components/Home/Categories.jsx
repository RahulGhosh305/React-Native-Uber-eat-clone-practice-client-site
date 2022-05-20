import { StyleSheet, Image, View, Text, ScrollView } from 'react-native'
import React from 'react'

const items = [
    {
        image: require("../../assets/images/shopping-bag.png"),
        text: "Pick-up"
    },
    {
        image: require("../../assets/images/bread.png"),
        text: "Bakery Items"
    },
    {
        image: require("../../assets/images/fast-food.png"),
        text: "Fast foods"
    },
    {
        image: require("../../assets/images/deals.png"),
        text: "Deals"
    },
    {
        image: require("../../assets/images/coffee.png"),
        text: "Coffee & tea"
    },
    {
        image: require("../../assets/images/desserts.png"),
        text: "Desserts"
    }
]

const Categories = () => {
    return (
        <View style={{
            marginTop: 5,
            backgroundColor: "#fff",
            paddingVertical: 5,
            paddingHorizontal: 10
        }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    items.map(singleItem => (
                        <View key={Math.random()} style={{ alignItems: "center", marginHorizontal: 15 }}>
                            <Image source={singleItem.image} style={{ width: 50, height: 40 }} />
                            <Text style={{ fontSize: 13, fontWeight: "900" }}>{singleItem.text}</Text>
                        </View>
                    ))
                }

            </ScrollView>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({})