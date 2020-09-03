//import libraries
import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Color from '../constants/colors';
import MainButton from '../components/MainButton';

// create a component
const GameOverScreen = (props) => {
    return(
        <View style={styles.screen}>
            <TitleText>Game Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image 
                    // source={require('../assets/success.png')} 
                    source={{ uri: 'https://images.pexels.com/photos/314703/pexels-photo-314703.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' }}
                    style={styles.image}
                />
            </View>
            <BodyText>
                The computer took <Text style={styles.highlight}>{props.numRounds}</Text> rounds, 
            </BodyText>
            <BodyText>
                to guess that your number was <Text style={styles.highlight}>{props.userNumber}</Text>
                </BodyText>
            <View style={styles.buttonContainer}>
                <MainButton onPress={props.onRestart}>New Game</MainButton>
            </View>
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
    imageContainer: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%', 
        height: '100%',
    },
    highlight: {
        color: Color.primary,
        fontFamily: 'open-sans-bold'
    },
    buttonContainer: {
        marginVertical: 10
    }
});

//make this component available to the app
export default GameOverScreen;
