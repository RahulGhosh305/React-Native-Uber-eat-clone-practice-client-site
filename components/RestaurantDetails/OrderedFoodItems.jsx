import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const OrderedFoodItems = (props) => {
    const foodMenu = props.foods
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    foodMenu.map((food, index) => (
                        <View key={index}>
                            <View style={styles.menuStyleItem}>
                                <FoodInfo food={food} />
                                <FoodImage foodImage={food} />
                            </View>
                            <Divider width={1} orientation="vertical" style={{ marginHorizontal: 20 }} />
                        </View>
                    ))
                }
            </ScrollView>
        </>
    )
}

const FoodInfo = (props) => (
    <View style={{ width: 250, justifyContent: "space-evenly" }}>
        <Text style={styles.titleStyle}>{props.food.menuname}</Text>
        {/* <Text>{props.food.description}</Text> */}
        <Text>{props.food.price} Tk</Text>
    </View>
)
const FoodImage = ({ marginLeft, ...props }) => (
    <View style={{ justifyContent: "center" }}>
        <Image source={{ uri: props.foodImage.image }} style={{ width: 80, height: 80, borderRadius: 8 }} />
    </View>
)

export default OrderedFoodItems

const styles = StyleSheet.create({
    menuStyleItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 15
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "600"
    }
})