import React from "react";
import { View, StyleSheet, Image, Text, FlatList, Dimensions, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "../../value/style";

const CardVerticalVideo = (props) => {
    const navigation = props.navigation;

    return (
            <View style={styles.cardVideoVerticalCard}>
                <View style={{ position: 'relative' }}>
                    <Image style={{ width: '100%', aspectRatio: 16 / 9, resizeMode: 'cover' }} source={{ uri: `https://img.youtube.com/vi/${props.videoId}/hqdefault.jpg` }} />
                    <Text style={styles.cardVideoTime}>00:00</Text>
                </View>
                <View style={styles.cardVideoTitle}>
                    <MaterialIcons name="account-circle" size={50} />
                    <View>
                        <Text style={{ fontSize: 15, width: Dimensions.get("screen").width - 70 }} ellipsizeMode="tail" numberOfLines={2}>{props.videoTitle}</Text>
                        <Text>{props.videoChannelName}</Text>
                    </View>
                </View>
            </View>

    )
}

export default CardVerticalVideo;