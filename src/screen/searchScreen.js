import { View, StyleSheet, Image, Text, FlatList } from "react-native";
import { API_JSON_DB, API_KEY } from "../api/api";
import { useEffect, useState } from "react";
import { useIsFocused } from '@react-navigation/native';


const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        flex: 1,
    },
});

const Search = (props) => {
    const navigation = props.navigation;

    const route = props.route;
    const value = route.params?.value;

    const refershScreen = useIsFocused();

    const [list, setList] = useState([]);

    // useEffect(() => {
    //     getList();
    //     console.log(list, value);
    // }, [refershScreen,value]);

    return (
        <View>
            <Text style={{textAlign: 'center'}}>Search quickly</Text>
        </View>
    );
}

export default Search;