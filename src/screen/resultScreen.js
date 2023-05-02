import { View, StyleSheet, Image, Text, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { useIsFocused } from '@react-navigation/native';
import CardVideo from "../component/card/cardVideo";

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
    let key1 = "AIzaSyA8wyt4EiDrHf1P950xCShD2hkLNWTKe8M";
    let key2 = "AIzaSyD-5g7K3h-htIcugCC3bQYmojcmEBgfclU";

    let uri = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${value}&type=video&key=${key2}`;

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
                <CardVideo
                    videoId = {item.id.videoId}
                    videoTitle = {item.snippet.title}
                    videoChannelName = {item.snippet.channelTitle}  
                />
                }
                keyExtractor={(item) => item.id.videoId}
            />
        </View>
    );
}

export default Result;