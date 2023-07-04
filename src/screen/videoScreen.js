import { Video, ResizeMode } from 'expo-av';
import { ActivityIndicator, View } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Button } from 'react-native';
import { StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import ytdl from 'react-native-ytdl';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native';
import { Dimensions } from 'react-native';

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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    width: Dimensions.get("screen").width - 70,
  },
});

const VideoS = (props) => {

  const route = props.route;
  const videoId = route.params?.videoId;
  const videoTitle = route.params?.videoTitle;
  const videoChannelName = route.params?.videoChannelName;

  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [pause,setPause] = useState(0);

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

  const onPlaybackStatusUpdate = (playbackStatus) => {
    if (playbackStatus.isLoaded && !playbackStatus.isPlaying && pause == 0) {
      video.current.playAsync(); // Autoplay when playback status indicates the video is loaded and not playing
    }
    // if (playbackStatus.isLoaded && !playbackStatus.isPlaying && playbackStatus.didJustFinish) {
    //   video.current.replayAsync(); // Replay the video after it ends
    // }
    setStatus(playbackStatus);
    setPause(1);
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
          onPlaybackStatusUpdate={status => onPlaybackStatusUpdate(status)} />

        <View style={{margin: 10}}>
        <Text style={styles.title} ellipsizeMode="tail">{videoTitle}</Text>
        <Text>{videoChannelName}</Text>
        <View>
          <Text>1M Views</Text>
          <Text>September 13th, 2022</Text>
        </View>
        </View>
      </View>
    </SafeAreaView>

  )
}

export default VideoS;