import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

const MenuItems = ({ hideCheckbox, foods, marginLeft, ...props }) => {
    // console.log(props.route.params.ele.foodMenu);
    const foodMenu = props.route.params.ele.foodMenu
    const restaurantName = props.restaurantName

    const dispatch = useDispatch()
    const seletedItem = (item, checkboxValue) => dispatch({
        type: "ADD_TO_CART",
        payload: { ...item, restaurantName: restaurantName, checkboxValue: checkboxValue }
    })


    const cartItems = useSelector(
        (state) => state.cartReducer.selectedItems.items
    );

    const isFoodInCart = (food, cartItems) =>
        Boolean(cartItems.find((item) => item.menuname === food.menuname));

    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    foodMenu.map((food, index) => (
                        <View key={index}>
                            <View style={styles.menuStyleItem}>

                                {
                                    hideCheckbox ? (<></>) : (<BouncyCheckbox
                                        onPress={(checkboxValue) => seletedItem(food, checkboxValue)}
                                        isChecked={isFoodInCart(food, cartItems)}
                                        size={25}
                                        fillColor="green"
                                        iconStyle={{ borderColor: "lightgray", borderRadius: 1 }}
                                    />)
                                }
                                <FoodInfo food={food} />
                                <FoodImage foodImage={food} marginLeft={marginLeft ? marginLeft : 0} />
                            </View>
                            <Divider width={0.5} orientation="vertical" style={{ marginHorizontal: 20 }} />
                        </View>
                    ))
                }
            </ScrollView>
        </>
    )
}

export default MenuItems

const FoodInfo = (props) => (
    <View style={{ width: 250, justifyContent: "space-evenly" }}>
        <Text style={styles.titleStyle}>{props.food.menuname}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price} Tk</Text>
    </View>
)
const FoodImage = ({ marginLeft, ...props }) => (
    <View style={{ justifyContent: "center" }}>
        <Image source={{ uri: props.foodImage.image }} style={{ width: 80, height: 80, borderRadius: 8, marginLeft: marginLeft }} />
    </View>
)

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