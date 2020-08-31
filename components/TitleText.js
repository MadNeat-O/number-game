//import libraries
import React from 'react';
import { Text, StyleSheet } from 'react-native';

// create a component
const TitleText = (props) => <Text style={{...styles.Title,  ...props.style}}>{props.children}</Text>

// define your styles
const styles = StyleSheet.create({
    Title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    }
});

//make this component available to the app
export default TitleText;
