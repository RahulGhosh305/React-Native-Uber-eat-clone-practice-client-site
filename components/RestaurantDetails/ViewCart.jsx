import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from "react-redux";
import OrderItem from './OrderItem';
import LottieView from 'lottie-react-native';



const ViewCart = ({ navigation, route }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    // const [lastFoodOrder, setLastFoodOrder] = useState([]);

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

    const addOrderToFireBase = () => {
        setLoading(true)
        const checkoutData = {
            items: items,
            restaurantName: restaurantName,
        }
        fetch("http://192.168.0.103:3000/orders", {
            method: 'POST',
            body: JSON.stringify(checkoutData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    setLoading(false)
                    setModalVisible(false)
                    navigation.navigate('OrderCompleted', { data })
                }, 2500)
                // console.log(data)
            })
        // console.log(checkoutData);
    };

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                        {items.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Subtotal</Text>
                            <Text style={styles.subtotalText}>{totalTaka} Tk</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <TouchableOpacity
                                onPress={() => {
                                    addOrderToFireBase();
                                    setModalVisible(false);
                                }}
                                style={{
                                    marginTop: 20,
                                    backgroundColor: "black",
                                    alignItems: "center",
                                    padding: 13,
                                    borderRadius: 30,
                                    width: 300,
                                    position: "relative",
                                }}>
                                <Text style={{ color: "white", fontSize: 20 }}>CheckOut</Text>
                                <Text
                                    style={{
                                        position: "absolute",
                                        right: 20,
                                        color: "white",
                                        fontSize: 15,
                                        top: 17,
                                    }}
                                >
                                    {total ? totalTaka : ""} Tk
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        )
    }

    // console.log(totalTaka);
    return (
        <>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >

                {checkoutModalContent()}

            </Modal>

            {totalTaka > 0 ? (
                <View style={{
                    flexDirection: "row",
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    bottom: 20,
                    zIndex: 999
                }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        width: "100%"
                    }}>
                        <TouchableOpacity
                            onPress={() => setModalVisible(true)}
                            style={{
                                marginTop: 20,
                                backgroundColor: "#000",
                                padding: 13,
                                borderRadius: 30,
                                width: 300,
                                alignItems: "center",
                                position: "relative",
                                flexDirection: "row",
                                justifyContent: "flex-end",
                                padding: 15
                            }}
                        >
                            <Text style={{ fontSize: 20, color: "#fff", marginRight: 30 }}>View Cart</Text>
                            <Text style={{ fontSize: 20, color: "#fff", marginRight: 20 }}>{totalTaka} Tk</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (<></>)}

            {loading ? (
                <View
                    style={{
                        backgroundColor: "black",
                        position: "absolute",
                        opacity: 0.6,
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <LottieView
                        style={{ height: 200 }}
                        source={require("../../assets/animations/scanner.json")}
                        autoPlay
                        speed={3}
                    />
                </View>) : (<></>)}
        </>
    )
}

export default ViewCart

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.7)",
    },

    modalCheckoutContainer: {
        backgroundColor: "white",
        padding: 16,
        height: 500,
        borderWidth: 1,
    },

    restaurantName: {
        textAlign: "center",
        fontWeight: "600",
        fontSize: 18,
        marginBottom: 10,
    },

    subtotalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20
    },

    subtotalText: {
        textAlign: "left",
        fontWeight: "600",
        fontSize: 20,
        marginBottom: 10,
    },
})