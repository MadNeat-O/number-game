import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView  } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
 
const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rando = Math.floor(Math.random() * (max - min)) + min;
    if (rando === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rando;
    }
}

const GameScreen  = props => {
    const initGuess = generateRandomBetween(1, 100, props.userChoice)
    const [currentGuess, setCurrentGuess] = useState(initGuess);
    const [pastGuesses, setPastGuesses] = useState([initGuess])
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoice, onGameOver])

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'higher' && currentGuess > props.userChoice)) {
            Alert.alert('No Cheating!', 'Please provide the correct feedback', [
                {text: 'Okay', style: "cancel"}
            ]);
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }
        const nextNum = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNum);
        // setRounds(curRounds => curRounds + 1)
        setPastGuesses(curPastGuesses => [nextNum, ...curPastGuesses])
    };

    return(
        <View style={styles.screen}>
            <TitleText>Computer's Guess:</TitleText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
                    <AntDesign name="upcircleo" size={24} color="white" />
                </MainButton>
                <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
                    <AntDesign name="downcircleo" size={24} color="white" />
                </MainButton>
            </Card>
            <ScrollView>
                {pastGuesses.map(guess => 
                    <View key={guess}>
                        <Text>{guess}</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;
