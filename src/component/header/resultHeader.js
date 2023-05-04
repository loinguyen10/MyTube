import React, { useEffect, useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const styles = StyleSheet.create({
    header: {
        paddingVertical: 5,
        flexDirection: "row",
    },

    centerVertical: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    txtInput: {
        marginHorizontal: 5,
        paddingHorizontal: 10,
        fontSize: 18,
        fontWeight:"bold",
    },
});

const ResultHeader = (props) => {

    const navigation = props.navigation;
    const [txtSearch, setTxtSearch] = useState("");

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('searchRecently');
            if (value !== null) {
                console.log("get "+value);
                return setTxtSearch(value);
            }
        } catch (e) {
            console.log('Error retrieving data: ', e);
        }
    }

    const refershScreen = useIsFocused();

    useEffect(() => {
        getData();
    }, [refershScreen]);

    return (
        <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
            <View style={styles.header}>
                <Ionicons style={{ marginHorizontal: 7 }} name="arrow-back" size={30} color="black" onPress={() => navigation.goBack()} />
                <Text style={[styles.txtInput,styles.centerVertical]}>{txtSearch}</Text>
                <View style={{ flex: 1 }} />
                <MaterialIcons style={{ marginHorizontal: 7 }} name="search" size={30} onPress={() => null} />

            </View>
        </SafeAreaView>
    )
}

export default ResultHeader;