import React, { useState } from 'react';
import { 
    View, 
    StyleSheet, 
    Text, 
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    ScrollView,
    KeyboardAvoidingView,
    Dimensions
 } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4);

    const updateLayout = () => {
        setButtonWidth(Dimensions.get('window').width / 4);
    }

    Dimensions.addEventListener('change', updateLayout)

    const numberInputHandler = inputText => {
         setEnteredValue(inputText.replace(/[^0-9]/g, ''));    
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number', 
                'Number has to be between 1 and 99', 
                [{
                    text: 'Okay', 
                    style: 'destructive', 
                    onPress: resetInputHandler
                }]
            )
            return;
        };
        setConfirmed(true);
        setSelectedNumber(parseInt(enteredValue))
        setEnteredValue('');
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = 
        <Card style={styles.confirmContainer}>            
            <Text>
                Your Number:
            </Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <MainButton onPress={() => props.onStartGame(selectedNumber)}>
                Start Game!
            </MainButton>
        </Card>
    }
    
    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss();
                }}>
                    <View style={styles.screen}>
                        <TitleText style={styles.title}>Start a new game!</TitleText>
                        <Card style={styles.inputContainer}>
                            <BodyText style={styles.prompt}>Enter a number</BodyText>
                            <Input 
                                style={styles.input}
                                autoCapitalize="none"
                                autoCorrect={false} 
                                keyboardType="number-pad"
                                maxLength={2}
                                onChangeText={numberInputHandler}
                                value={enteredValue}
                            />
                            <View style={styles.buttonContainer}>
                                <View style={{width: buttonWidth}}>
                                    <Button title="Reset" color={Colors.danger} onPress={resetInputHandler} />
                                </View>
                                <View style={{width: buttonWidth}}>
                                    <Button title="Confirm" color={Colors.primary} onPress={confirmInputHandler} />
                                </View>
                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    inputContainer: {
        width: '80%',
        maxWidth: '95%',
        minWidth: 300,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent:  'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100,
        backgroundColor: Colors.grey,
        borderRadius: 3
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    confirmContainer: {
        marginVertical: 20,
        alignItems: 'center'
    }
});

export default StartGameScreen;