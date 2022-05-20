import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const ButtomTabs = () => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 30, margin: 10 }}>
            <Icon icon="home" text="Home" />
            <Icon icon="search" text="Browse" />
            <Icon icon="shopping-bag" text="Grocery" />
            <Icon icon="receipt" text="Orders" />
            <Icon icon="user" text="Account" />
        </View>
    )
}

export default ButtomTabs

const Icon = (props) => (
    <View>
        <FontAwesome5
            name={props.icon}
            size={25}
            style={{
                marginBottom: 3,
                alignSelf: "center"
            }}
        />
        <Text>{props.text}</Text>
    </View>
)


const styles = StyleSheet.create({})

