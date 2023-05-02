import { View, StyleSheet, Image, Text, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import CardVideo from "../component/card/cardVideo";

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        flex: 1,
    },
});

const Home = (props) => {
    const navigation = props.navigation;

    const refershScreen = useIsFocused();

    let key1 = "AIzaSyA8wyt4EiDrHf1P950xCShD2hkLNWTKe8M";
    let key2 = "AIzaSyD-5g7K3h-htIcugCC3bQYmojcmEBgfclU";

    let uri = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&channelId=UClD-jIu-nnnaxlrg4A6L7lg&order=date&type=video&key=${key2}`;


    const [list, setList] = useState([]);

    const getList = () => {
        fetch(uri)
        .then((res) => res.json())
        .then((data) => setList(data.items))
        .then((data) => console.log(data.items))
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        getList();
    }, []);

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

export default Home;