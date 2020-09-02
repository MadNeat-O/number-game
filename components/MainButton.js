//import libraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Color from '../constants/colors'

// create a component
const MainButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.MainButton}>
                <Text style={styles.buttonText}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

// define your styles
const styles = StyleSheet.create({
    MainButton: {
        backgroundColor: Color.base,
        padding: 12,
        fontFamily: 'open-sans',
        fontSize: 18,
        borderRadius: 5
    },
    buttonText: {
        color: 'white'
    }
});

//make this component available to the app
export default MainButton;
