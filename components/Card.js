import React from 'react';
import { View, StyleSheet  } from 'react-native';
 
const Card = props => {
    return (
    <View style={{...styles.card, ...props.style}}>
        {props.children}
    </View>
    )
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowRadius: 6,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        padding: 15,
        borderRadius: 10
    }
});

export default Card;