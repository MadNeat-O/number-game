//import libraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Color from '../constants/colors';
import MainButton from '../components/MainButton';

// create a component
const GameOverScreen = (props) => {
    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);

    useEffect(() => {
        const updateLayout = () => {
            setAvailableDeviceHeight(Dimensions.get('window').height);
            setAvailableDeviceWidth(Dimensions.get('window').width);
        }
    
        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.removeEventListener('change', updateLayout);  
        }
    });
    return(
        <ScrollView>
            <View style={styles.screen}>
                <TitleText>Game Over!</TitleText>
                <View style={[styles.imageContainer, {
                        width: availableDeviceWidth / 4,
                        maxHeight: availableDeviceWidth / 4,
                        borderRadius: (availableDeviceWidth / 4) / 2,
                        marginVertical: availableDeviceHeight / 20
                        }]}>
                    <Image 
                        // source={require('../assets/success.png')} 
                        source={{ uri: 'https://images.pexels.com/photos/314703/pexels-photo-314703.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' }}
                        style={styles.image}
                    />
                </View>
                <BodyText style={{fontSize: availableDeviceHeight < 400 ? 16 : 20}}>
                    The computer took <Text style={styles.highlight}>{props.numRounds}</Text> rounds, 
                </BodyText>
                <BodyText style={{fontSize: availableDeviceHeight < 400 ? 16 : 20}}>
                    to guess that your number was <Text style={styles.highlight}>{props.userNumber}</Text>
                    </BodyText>
                <View style={styles.buttonContainer}>
                    <MainButton onPress={props.onRestart}>New Game</MainButton>
                </View>
            </View>
        </ScrollView>
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
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
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
