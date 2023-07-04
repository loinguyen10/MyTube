import { Video, ResizeMode } from 'expo-av';
import { ActivityIndicator, View, StyleSheet, StatusBar, Button, SafeAreaView, Text, Dimensions } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import ytdl from 'react-native-ytdl';
import * as Progress from 'react-native-progress';
import { Ionicons, Octicons } from '@expo/vector-icons';

const PartVideo = (props) => {

    const videoId = props.videoId;

    const video = useRef(null);
    const [status, setStatus] = useState({});
    const [isPlaying, setIsPlaying] = useState(false);

    const getDownloadUrl = async () => {
        try {
            const info = await ytdl.getInfo(videoId);
            const format = ytdl.chooseFormat(info.formats, { filter: 'videoandaudio' });
            const downloadUrl = format.url;

            video.current.loadAsync({ uri: downloadUrl }, {}, false);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handlePlayPause = async () => {
        if (isPlaying) {
            console.log("pause");
            await video.current.pauseAsync();
        } else {
            console.log("play");
            await video.current.playAsync();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        getDownloadUrl();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.videoContainer}>
                <Video
                    ref={video}
                    style={styles.video}
                    useNativeControls={false}
                    resizeMode={ResizeMode.CONTAIN}
                />

                <View style={styles.buttonContainer}>
                    <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>Play Video In Landscape And Portrait Mode Using React Native Expo Application || Android & iOS || JS</Text>
                    <View style={[styles.cen, { marginVertical: 50 }]}>
                        <Ionicons name="play-back-sharp" size={50} color="white" style={{ marginHorizontal: '5%' }} />
                        <Ionicons name={!isPlaying ? 'play-sharp' : 'pause-sharp'} size={50} color="white" style={{ marginHorizontal: '5%' }} onPress={handlePlayPause} />
                        <Ionicons name="play-forward-sharp" size={50} color="white" style={{ marginHorizontal: '5%' }} />
                    </View>
                    <View style={styles.cen}>
                        <Text style={{ marginHorizontal: '1%', color: 'white' }}>00:00</Text>
                        <Progress.Bar progress={0.5} width={Dimensions.get("screen").width - 85} color='red' unfilledColor='white' borderWidth={0} />
                        <Octicons name="screen-full" size={24} color="white" style={{ marginHorizontal: '1%' }} />
                    </View>
                </View>
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
    video: {
        alignSelf: 'center',
        width: '100%',
        aspectRatio: 16 / 9,
        resizeMode: 'contain',
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'gray'
    },

    cen: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    full: {
        ...StyleSheet.absoluteFillObject,
        alignSelf: 'flex-end',
        position: 'absolute',
        marginTop: -10,
        left: '90%',
    },

    title: {
        color: 'white',
        fontSize: 20,
        width: Dimensions.get("screen").width - 50,
    },

    videoContainer: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonContainer: {
        position: 'absolute',
        alignItems: 'center',
        marginTop: 10,
    },
});

export default PartVideo;