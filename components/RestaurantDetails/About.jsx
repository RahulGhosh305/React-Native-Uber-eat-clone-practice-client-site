import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


// const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQaHwBlacbEp4myejyAllCdYyb7739vppTw&usqp=CAU"
// const title = "Farmhouse kitchen thai cuisines"
// const description = "Thai • Confort food • $$ • 🎫 • 4 ⭐ (2913+)"

// const restaurantAboutData = {
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQaHwBlacbEp4myejyAllCdYyb7739vppTw&usqp=CAU",
//     location: "Abraham Adesanya",
//     reviews: 50,
//     restauranttype: "canteen",
//     slug: "foodfusion"
// }



const About = (props) => {
    // console.log(props.route.params.ele);
    const { image, slug, location, restauranttype, reviews } = props.route.params.ele
    // console.log(image, slug, location, restauranttype, reviews)
    const description = `${location} • ${restauranttype} food • $$ • 🎫 • 4.8 ⭐ (${reviews}+)`
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={slug} />
            <RestaurantDescription description={description} />
        </View>
    )
}

export default About

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
)

const RestaurantName = (props) => (
    <Text style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "600",
        fontSize: 29
    }}>{props.name}</Text>
)

const RestaurantDescription = (props) => (
    <Text style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5
    }}>{props.description}</Text>
)

const styles = StyleSheet.create({})