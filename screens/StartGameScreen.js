import React, { useState } from 'react';
import { 
    View, 
    StyleSheet, 
    Text, 
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
 } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer'
import Colors from '../constants/colors';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

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
        }
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
            <Button title='Start Game!' />
        </Card>
    }
    
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Enter a number</Text>
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
                        <View style={styles.button}>
                            <Button title="Reset" color={Colors.danger} onPress={resetInputHandler} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" color={Colors.primary} onPress={confirmInputHandler} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
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
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
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