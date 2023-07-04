import { Video, ResizeMode } from 'expo-av';
import { ActivityIndicator, View, StyleSheet, StatusBar, Button, SafeAreaView, Text, Dimensions } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import ytdl from 'react-native-ytdl';

const PartTitle = (props) => {

    const videoTitle = props.videoTitle;
    const videoChannelName = props.videoChannelName;
    const videoViewCount = props.videoViewCount;
    const videoDateUpload = props.videoDateUpload;

    return (
            <View style={styles.container}>
                    <Text style={styles.title} ellipsizeMode="tail">{videoTitle}</Text>
                    <Text>{videoChannelName}</Text>
                    <View>
                        <Text>{videoViewCount}</Text>
                        <Text>{videoDateUpload}</Text>
                    </View>
                </View>

    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        paddingVertical: 5,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        width: Dimensions.get("screen").width - 70,
    },
});

export default PartTitle;