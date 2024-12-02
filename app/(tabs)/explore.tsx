// explore page
import { Colors } from "@/constants/Colours";
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
} from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Explore() {
    // const windowWidth = Dimensions.get("window").width;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* Header Section */}
                <View style={styles.header}>
                    <Image
                        source={require("../../assets/images/logo-forsignup.png")} // Replace with your logo
                        style={styles.logo}
                    />
                </View>

                {/* Welcome Section */}
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeText}>WELCOME</Text>
                    <Text style={[styles.welcomeText]}>BACK</Text>
                    <Text style={[styles.welcomeText, styles.highlightText]}>CHARLIE.</Text>
                </View>

                {/* Action Button Section */}
                <TouchableOpacity style={styles.actionButton}>
                    <MaterialIcons name="arrow-forward-ios" size={65} color="white" />
                </TouchableOpacity>

                {/* Bottom Graphic Section */}
                <View style={styles.graphicContainer}>
                    <Image
                        source={require("@/assets/images/explore-walks.png")} // Replace with the bottom graphic image
                        style={styles.graphicImage}
                        resizeMode="contain"
                    />
                    {/* location section */}
                    <View style={styles.locationContainer}>
                        <FontAwesome5 name="location-arrow" size={15} color="black" />
                        <Text style={styles.locationText}>London</Text>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.aftersColors.pinkColor, // Base pink-purple color
        // alignItems: "center",
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    header: {
        marginTop: 30,
        alignItems: "center",
    },
    logo: {
        width: 100,
        height: 30,
        resizeMode: "contain",
    },
    welcomeContainer: {
        marginTop: 50,
        paddingLeft: 40,
        alignItems: "flex-start",
    },
    welcomeText: {
        fontSize: 51,
        color: Colors.aftersColors.blackColor, // Black color
        fontFamily: 'Bungee-Regular', // Update to your custom font if needed
        lineHeight: 48,
    },
    highlightText: {
        color: Colors.aftersColors.yellowColor, // Yellow color for "BACK"
    },
    actionButton: {
        marginTop: 70,
        width: 129,
        height: 129,
        margin: "auto",
        borderRadius: 100,
        backgroundColor: Colors.aftersColors.blackColor, // Black button
        justifyContent: "center",
        alignItems: "center",
        shadowColor: Colors.aftersColors.blackColor,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    actionButtonText: {
        fontSize: 30,
        color: Colors.aftersColors.whiteColor, // White arrow
        fontWeight: "bold",
    },
    graphicContainer: {
        position: "relative",
        marginBottom: 100,
    },
    graphicImage: {
        width: "100%",
    },
    locationContainer: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        backgroundColor: Colors.aftersColors.whiteColor,
        margin: "auto",
        flexDirection: "row",
        borderRadius: 50,
        alignItems: "center",
        gap: 5,
        marginTop: 5
    },
    locationText: {
        color: Colors.aftersColors.blackColor,
        fontSize: 15,
        fontFamily: 'Waveahaus-Bold',
    }
});
