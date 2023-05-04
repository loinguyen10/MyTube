import React, { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        width: '75%',
        marginHorizontal: 5,
        backgroundColor: 'gray',
        elevation: 5,
        paddingHorizontal: 10
    },
});

const SearchHeader = (props) => {

    const navigation = props.navigation;
    const [txtSearch, setTxtSearch] = useState("");

    const storeData = async () => {
        try {
          await AsyncStorage.setItem('searchRecently', txtSearch);
          navigation.navigate("Result", {value: txtSearch})
        } catch (e) {
          console.log('Error storing data: ', e);
        }
      }

    return (
        <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
            <View style={styles.header}>
                <Ionicons style={{ marginHorizontal: 7 }} name="arrow-back" size={30} color="black" onPress={() => navigation.goBack()}/>
                <TextInput
                    placeholder='Search'
                    value={txtSearch}
                    onChangeText={(text) => setTxtSearch(text)}
                    clearButtonMode="always"
                    style={styles.txtInput}
                />
                <MaterialIcons style={{ marginHorizontal: 7 }} name="search" size={30} onPress={() => storeData()}/>

            </View>
        </SafeAreaView>
    )
}

export default SearchHeader;