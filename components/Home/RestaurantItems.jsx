import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// {
//     image: ele.image,
//     location: ele.location,
//     reviews: ele.reviews,
//     restauranttype: ele.restauranttype,
//     slug: ele.slug
// }
const RestaurantItems = ({ navigation, ...props }) => {
    const restaurantData = props.restaurantData
    return (
        <View>
            {
                restaurantData.map(ele => <View key={Math.random()}>
                    <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail', { ele })}
                        activeOpacity={1} style={{ marginBottom: 10 }}>
                        <View style={{ backgroundColor: "#fff", padding: 15, marginTop: 10 }}>
                            <RestaurantImage image={ele.image} />
                            <RestaurantInfo name={ele.slug} rating={4.8} />
                        </View>
                    </TouchableOpacity>
                </View>)
            }
        </View>
    )
}
export default RestaurantItems



const RestaurantImage = (props) => (
    <View>
        <Image source={{
            uri: props.image
        }}
            style={{ width: "100%", height: 180 }}
        />
        <TouchableOpacity style={{ position: "absolute", right: 10, top: 10 }}>
            <MaterialCommunityIcons name="heart-outline" size={30} color="red" />
        </TouchableOpacity>
    </View>

)

const RestaurantInfo = (props) => (
    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: "900" }}>{props.name}</Text>
            <Text style={{ fontSize: 13, color: "gray" }}>30-35 mins</Text>
        </View>
        <View style={{ backgroundColor: "#eee", width: 30, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 15 }}>
            <Text>{props.rating}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({})