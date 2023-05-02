import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import logo from "../../image/logo.png"

const styles = StyleSheet.create({
    header: {
        paddingVertical: 5,
        flexDirection: "row",
    },

    centerVertical: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
});

const HomeHeader = (props) => {
    const navigation = props.navigation;

    return (
        <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
            <View style={styles.header}>
                <Image style={[{ width: '25%', aspectRatio: 16 / 9, marginLeft: 15}, styles.centerVertical]} source={logo}/>
                <View style={{ flex: 1 }} />
                <View style={[{flexDirection: "row", marginRight: 8}, styles.centerVertical]}>
                    <MaterialIcons style={{marginHorizontal:7}} name="search" size={30} onPress={() => navigation.navigate("Search")}/>
                    <MaterialIcons style={{marginHorizontal:7}} name="account-circle" size={30} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeHeader;