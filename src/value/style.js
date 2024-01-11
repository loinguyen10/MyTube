import { StyleSheet, Dimensions } from "react-native";

export let screenSize = Dimensions.get("screen");
export let screenWidth = screenSize.width;
export let screenHeight = screenSize.height;

export const styles = StyleSheet.create({
    cardVideoTitle: {
        paddingTop: 10,
        flexDirection: "row",
        marginHorizontal: 5,
    },

    cardVideoVerticalCard: {
        elevation: 4,
        marginVertical: 10,
    },

    cardVideoHorizontalCard: {
        elevation: 4,
        marginHorizontal: 5,
    },

    cardVideoTime: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: 'black',
        color: 'white',
        padding: 2,
        paddingHorizontal: 6,
        margin: 5,
    },

    recentContainer: {
        elevation: 4,
    },

    resultSearchContainer: {
        height: screenHeight + 60,
    },

    resultSearchHeader: {
        paddingVertical: 5,
        flexDirection: "row",
    },

    resultSearchTxtInput: {
        marginHorizontal: 5,
        paddingHorizontal: 10,
        fontSize: 18,
        fontWeight:"bold",
    },
  });