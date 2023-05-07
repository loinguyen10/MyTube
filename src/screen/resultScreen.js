import { View, StyleSheet, Image, Text, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { useIsFocused } from '@react-navigation/native';
import CardVideo from "../component/card/cardVideo";
import { API_KEY_1, API_KEY_2 } from "../api/api";
import { TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        flex: 1,
    },
});

const Result = (props) => {
    const navigation = props.navigation;

    const route = props.route;
    const value = route.params?.value;

    let uri = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${value}&type=video&key=${API_KEY_2}`;

    const refershScreen = useIsFocused();

    const [list, setList] = useState([]);

    const getList = () => {
        fetch(uri)
        .then((res) => res.json())
        .then((data) => setList(data.items))
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        getList();
        console.log(value);
    },[refershScreen]);

    return (
        <View>
            <FlatList
                data={list}
                renderItem={({ item }) =>
                <TouchableOpacity onPress={() => navigation.navigate("Video",{videoId: item.id.videoId, videoTitle: item.snippet.title, videoChannelName: item.snippet.channelTitle})}>
                    <CardVideo
                    videoId = {item.id.videoId}
                    videoTitle = {item.snippet.title}
                    videoChannelName = {item.snippet.channelTitle}  
                />
                </TouchableOpacity>
                }
                keyExtractor={(item) => item.id.videoId}
            />
        </View>
    );
}

export default Result;