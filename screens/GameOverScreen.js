//import libraries
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
const GameOverScreen = (props) => {
    return(
        <View style={styles.screen}>
            <Text>Game Over!</Text>
            <Text>Your number was: {props.userNumber}</Text>
            <Text>Number of Rounds: {props.numRounds}</Text>
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
    }
});

//make this component available to the app
export default GameOverScreen;
