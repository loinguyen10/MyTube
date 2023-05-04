import React from "react";
import { View, StyleSheet, Image, Text, FlatList, Dimensions, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    title: {
        paddingTop: 10,
        flexDirection: "row",
        marginHorizontal: 5,
    },

    card: {
        elevation: 4,
        marginVertical: 10,
    },

    time: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: 'black',
        color: 'white',
        padding: 2,
        paddingHorizontal: 6,
        margin: 5,
    }

});

const CardVideo = (props) => {
    const navigation = props.navigation;

    return (
            <View style={styles.card}>
                <View style={{ position: 'relative' }}>
                    <Image style={{ width: '100%', aspectRatio: 16 / 9, resizeMode: 'cover' }} source={{ uri: `https://img.youtube.com/vi/${props.videoId}/hqdefault.jpg` }} />
                    <Text style={styles.time}>00:00</Text>
                </View>
                <View style={styles.title}>
                    <MaterialIcons name="account-circle" size={50} />
                    <View>
                        <Text style={{ fontSize: 20, width: Dimensions.get("screen").width - 70 }} ellipsizeMode="tail" numberOfLines={2}>{props.videoTitle}</Text>
                        <Text>{props.videoChannelName}</Text>
                    </View>
                </View>
            </View>

    )
}

export default CardVideo;