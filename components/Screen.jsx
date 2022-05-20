import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

const Screen = ({ children, style }) => {
    return (
        <View style={[styles.Screen, style]}>
            {children}
        </View>
    )
}

export default Screen;

const styles = StyleSheet.create({
    Screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    }
})