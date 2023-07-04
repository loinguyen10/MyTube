import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import * as Progress from 'react-native-progress';
import { Ionicons,Octicons  } from '@expo/vector-icons'; 

const HelloWorldApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>Play Video In Landscape And Portrait Mode Using React Native Expo Application || Android & iOS || JS</Text>
      <View style={[styles.cen,{marginVertical: 50}]}>
        <Ionicons name="play-back-sharp" size={50} color="black" style={{marginHorizontal: 25}} />
        <Ionicons name="play-sharp" size={50} color="black"  style={{marginHorizontal: 25}} />
        <Ionicons name="play-forward-sharp" size={50} color="black"  style={{marginHorizontal: 25}} />
      </View>
      <View style={styles.cen}>
        <Progress.Bar progress={0.5} width={Dimensions.get("screen").width - 60}/>
        <Octicons name="screen-full" size={24} color="black" style={{marginHorizontal:10}}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    paddingVertical: 5,
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
    fontSize: 20,
    width: Dimensions.get("screen").width - 50,
  },
});

export default HelloWorldApp;