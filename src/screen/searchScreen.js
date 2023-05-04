import { View, StyleSheet, Image, Text, FlatList } from "react-native";
import { API_JSON_DB, API_KEY } from "../api/api";
import { useEffect, useState } from "react";
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        flex: 1,
    },
});

const Search = (props) => {
    const navigation = props.navigation;

    const route = props.route;
    // const value = route.params?.value;

    const refershScreen = useIsFocused();

    const [list, setList] = useState([]);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('searchRecently');
            if (value !== null && !value.trim() == "") {
                console.log("search " + value);
                addList(value);
            }
        } catch (e) {
            console.log('Error retrieving data: ', e);
        }
    }

    const addList = (recently) => {
        const recentlyX = recently.trim();
        if (list.includes(recentlyX)) {
            const newList = list.filter((item) => item !== recentlyX);
            setList(newList);
        }
    
        setList([...list, recentlyX]);
        console.log("recently " + recentlyX);
    
        if (list.length >= 10) {
            const newList = list.slice(0, 10);
            setList(newList);
        }
    
        setRecentlyList(list);
    }

    const setRecentlyList = async (list) => {
        try {
            await AsyncStorage.setItem('searchRecentlyList', JSON.stringify(list));
            console.log('Data saved.');
        } catch (e) {
            console.log(e);
        }
    }

    const getRecentlyList = async () => {
        try {
            const data = await AsyncStorage.getItem('searchRecentlyList');
            if (data) {
                setList(JSON.parse(data));
            }
            console.log(JSON.parse(data));
            console.log('Data loaded.');
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getData();
        getRecentlyList();
      }, [refershScreen]);

    return (
        <View>
            <View>
                {list.map((item, index) => (
                    <Text key={index}>{item}</Text>
                ))}
                <Text></Text>
            </View>
            <Text style={{ textAlign: 'center' }}>Search quickly</Text>
        </View>
    );
}

export default Search;