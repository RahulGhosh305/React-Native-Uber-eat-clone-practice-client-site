import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderItem = ({ item }) => {
    const { menuname, price } = item
    return (
        <View style={{
            justifyContent: "space-between",
            padding: 20,
            borderBottomWidth: 1,
            flexDirection: "row",
            borderBottomColor: "#999"
        }}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>{menuname}</Text>
            <Text style={{ opacity: 0.7, fontSize: 16 }}>{price} Tk.</Text>
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({})