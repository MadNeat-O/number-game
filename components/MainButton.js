//import libraries
import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    TouchableNativeFeedback 
} from 'react-native';

import Color from '../constants/colors'

// create a component
const MainButton = (props) => {
    let ButtonComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    };

    return (
        <View style={styles.butonContainer}> 
            <ButtonComponent onPress={props.onPress}>
                <View style={styles.MainButton}>
                    <Text style={styles.buttonText}>
                        {props.children}
                    </Text>
                </View>
            </ButtonComponent>
        </View>
    )
};

// define your styles
const styles = StyleSheet.create({
    butonContainer: {
        borderRadius: 25,
        overflow: 'hidden'
    },
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
