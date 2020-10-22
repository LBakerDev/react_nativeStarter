import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

const TextScreen = () => {

    const [name, setName] = useState('');
    const passwordError = <Text>Password must be longer than 5 Characters</Text>;

    return (
        <View>
            <Text>Enter Password: </Text>
            <TextInput
                onChangeText={newValue => setName(newValue)}
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
            />
            {name.length < 5 ? passwordError : null}
            <Text>{'\n'}</Text>
            <Text>My name is: {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        padding: 5
    }

})

export default TextScreen;