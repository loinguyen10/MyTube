import { Video, ResizeMode } from 'expo-av';
import { API_KEY_1, API_KEY_2 } from "../api/api";
import { View } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Button } from 'react-native';
import { StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import ytdl from 'react-native-ytdl';
import { SafeAreaView } from 'react-native';

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
    borderWidth: 2,
    borderColor: 'red'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const VideoS = (props) => {

  const route = props.route;
  const videoId = route.params?.videoId;

  const video = useRef(null);

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

  useEffect(() => {
    getDownloadUrl();
  }, []);

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          shouldPlay />
      </View>
    </SafeAreaView>

  )
}

export default VideoS;