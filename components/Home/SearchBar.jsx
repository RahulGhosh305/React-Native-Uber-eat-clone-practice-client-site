import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons'

const SearchBar = ({ onPressInputHandle }) => {
    const [text, onChangeText] = useState("");
    return (
        <View style={{ marginVertical: 15, flexDirection: "row" }}>
            <View style={{
                marginHorizontal: 20,
                backgroundColor: "#eee",
                borderRadius: 50,
                flexDirection: "row",
                alignItems: "center",
                width: "90%",
                paddingVertical: 10,
            }}>
                <View style={{ marginLeft: 10 }}>
                    <Ionicons name="location-sharp" size={26} />
                </View>
                <TextInput
                    style={{
                        backgroundColor: "#eee",
                        borderRadius: 30,
                        fontWeight: "700",
                        fontSize: 16,
                        width: "65%"
                    }}
                    placeholder="Search"
                    onChangeText={text => onChangeText(text)}
                    value={text}
                />
                <TouchableOpacity onPress={() => onPressInputHandle(text)}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 10,
                        backgroundColor: "#fff",
                        padding: 9,
                        borderRadius: 30
                    }}>
                        <Ionicons name="time-sharp" size={14} style={{ marginRight: 6 }} />
                        <Text>Search</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* <GooglePlacesAutocomplete
                query={{ key: "AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4" }}
                onPress={(data, details = null) => {
                    console.log(data.description);
                    // const city = data.description.split(",")[0];
                    // cityHandler(city);
                }}
                placeholder='Search'
                styles={{
                    textInputContainer: {
                        marginHorizontal: 20,
                        backgroundColor: "#eee",
                        borderRadius: 50,
                        flexDirection: "row",
                        alignItems: "center"
                    },
                    textInput: {
                        backgroundColor: "#eee",
                        borderRadius: 30,
                        fontWeight: "700",
                        fontSize: 16,
                        paddingTop: 10
                    },
                }}
                renderLeftButton={() => (
                    <View style={{ marginLeft: 10 }}>
                        <Ionicons name="location-sharp" size={26} />
                    </View>
                )}
                renderRightButton={() => (

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 8,
                        backgroundColor: "#fff",
                        padding: 9,
                        borderRadius: 30
                    }}>
                        <Ionicons name="time-sharp" size={14} style={{ marginRight: 6 }} />
                        <Text>Search</Text>
                    </View>
                )}
            /> */}
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({})