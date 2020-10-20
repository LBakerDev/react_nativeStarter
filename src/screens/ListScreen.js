import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {

    const friends = [
        { name: 'Friend 1', age: 14 },
        { name: 'Friend 2', age: 14 },
        { name: 'Friend 3', age: 14 },
        { name: 'Friend 4', age: 14 },
        { name: 'Friend 5', age: 14 },
        { name: 'Friend 6', age: 14 },
        { name: 'Friend 7', age: 14 }
    ];
    return (
        <FlatList
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
              return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    )
}
const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 10,
        marginLeft: 20,
        borderWidth: 1,
        borderStyle: 'solid'
    }

})

export default ListScreen;
