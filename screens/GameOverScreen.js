//import libraries
import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

// create a component
const GameOverScreen = (props) => {
    return(
        <View style={styles.screen}>
            <TitleText>Game Over!</TitleText>
            <Image source={require('../assets/success.png')} style={styles.image} />
            <BodyText>Your number was: {props.userNumber}</BodyText>
            <BodyText>Number of Rounds: {props.numRounds}</BodyText>
            <Button title="New Game" onPress={props.onRestart} />
        </View>
    )
};

// define your styles
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '50%',
        height: '25%'
    }
});

//make this component available to the app
export default GameOverScreen;
