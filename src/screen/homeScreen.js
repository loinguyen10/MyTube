import { View, StyleSheet, Image, Text, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import CardHorizontalVideo from "../component/card/cardVideoHorizontal";
import { API_KEY_2 } from "../api/api";
import { styles } from "../value/style";

const Home = (props) => {
    const navigation = props.navigation;

    const refershScreen = useIsFocused();

    let uri = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&channelId=UClD-jIu-nnnaxlrg4A6L7lg&order=date&type=video&key=${API_KEY_2}`;


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
            <View style={styles.recentContainer}>
                <Text>Recent Videos</Text>
                <FlatList
                    horizontal={true}
                    data={list}
                    renderItem={({ item }) =>
                        <CardHorizontalVideo
                            videoId={item.id.videoId}
                            videoTitle={item.snippet.title}
                            videoChannelName={item.snippet.channelTitle}
                        />
                    }
                    keyExtractor={(item) => item.id.videoId}
                />
            </View>
            <View style={styles.recentContainer}>
                <FlatList
                    horizontal={true}
                    data={list}
                    renderItem={({ item }) =>
                        <CardHorizontalVideo
                            videoId={item.id.videoId}
                            videoTitle={item.snippet.title}
                            videoChannelName={item.snippet.channelTitle}
                        />
                    }
                    keyExtractor={(item) => item.id.videoId}
                />
            </View>
        </View>
    );
}

export default Home;