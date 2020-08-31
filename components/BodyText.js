//import libraries
import React from 'react';
import { Text, StyleSheet } from 'react-native';

// create a component
const BodyText = (props) => <Text style={styles.body}>{props.children}</Text>

// define your styles
const styles = StyleSheet.create({
    body: {
        fontFamily: 'open-sans'
    }
});

//make this component available to the app
export default BodyText;
