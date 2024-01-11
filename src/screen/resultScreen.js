import { View, Image, Text, FlatList, TouchableOpacity, SafeAreaView, StatusBar } from "react-native";
import { useEffect, useState, React, useRef } from "react";
import { WebView } from 'react-native-webview';
import { useIsFocused } from '@react-navigation/native';
import CardVerticalVideo from "../component/card/cardVideoVertical";
import { API_KEY_1, API_KEY_2 } from "../api/api";
import { styles } from "../value/style";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

// const styles = StyleSheet.create({
//     container: {
//         paddingTop: 15,
//         flex: 1,
//     },
// });

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
    }, [refershScreen]);

    return (
        <View>
            <FlatList
                data={list}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => navigation.navigate("Video", { videoId: item.id.videoId, videoTitle: item.snippet.title, videoChannelName: item.snippet.channelTitle })}>
                        <CardViCardVerticalVideodeo
                            videoId={item.id.videoId}
                            videoTitle={item.snippet.title}
                            videoChannelName={item.snippet.channelTitle}
                        />
                    </TouchableOpacity>
                }
                keyExtractor={(item) => item.id.videoId}
            />
        </View>
    );
}

const ResultWeb = (props) => {
    const navigation = props.navigation;

    const route = props.route;
    const value = route.params?.value;

    let keyword = 'lj.nguyen';
    let url = `https://www.youtube.com/results?search_query=${keyword}&sp=EgIQAQ%253D%253D`;

    const [txtSearch, setTxtSearch] = useState("");
    const [canGoBack, setCanGoBack] = useState(false);
    const refershScreen = useIsFocused();
    const webviewref = useRef(null);

    const backAction = () => {
        if (canGoBack) {
            return webviewref.current.goBack();
        }
        return navigation.goBack();
    }

    // useEffect(() => {
    //     getList();
    //     console.log(value);
    // }, [refershScreen]);

    return (
        <View style={styles.resultSearchContainer}>
            <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
                <View style={styles.resultSearchHeader}>
                    <Ionicons style={{ marginHorizontal: 7 }} name="arrow-back" size={30} color="black" onPress={() => backAction()} />
                    <Text style={[styles.resultSearchTxtInput, { justifyContent: 'center', alignItems: 'center' }]}>{txtSearch}</Text>
                    <View style={{ flex: 1 }} />
                    <MaterialIcons style={{ marginHorizontal: 7 }} name="search" size={30} onPress={() => null} />

                </View>
            </SafeAreaView>
            <WebView
                source={{ uri: 'https://google.com'}}
                style={{ top: -48 }}
                onNavigationStateChange={(navState) => {
                    setCanGoBack(navState.canGoBack);
                    const currentUrl = navState.url;
                    if (navState.url.includes('/watch?v=')) {
                        console.log('Current Video ID:', currentUrl.substring(currentUrl.indexOf('=') + 1));
                        // navigation.navigate("Video", { videoId: item.id.videoId, videoTitle: item.snippet.title, videoChannelName: item.snippet.channelTitle });
                    }
                    console.log('Current URL:', currentUrl);
                }}

            />
        </View>
    );
}

export default ResultWeb;