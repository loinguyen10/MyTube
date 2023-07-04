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
import PartVideo from '../component/part/partVideo';
import PartTitle from '../component/part/partTitle';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    paddingVertical: 5,
  }
});

const TestS = () => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <View style={styles.container}>
        <PartVideo videoId = 'UTk9p-yg1p4'/>


        <View style={{margin: 10}}>
        <PartTitle
          videoTitle = 'KÊNH SANGTRAAN ĐÃ BỊ HACK'
          videoChannelName = 'Sangtraan'
          videoViewCount = '330K Views'
          videoDateUpload = 'June 17th, 2023'/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default TestS;