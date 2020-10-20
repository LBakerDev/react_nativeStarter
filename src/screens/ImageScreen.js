import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail
                imageScore="9"
                title="Forest"
                imageSource={require('../../assets/forest.jpg')} />
            <ImageDetail
                imageScore="7"
                title="Beach"
                imageSource={require('../../assets/beach.jpg')} />
            <ImageDetail
                imageScore="10"
                title="Mountain"
                imageSource={require('../../assets/mountain.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create(
    {

    }
)

export default ImageScreen;