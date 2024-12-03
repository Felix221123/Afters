// profile page

import { Colors } from "@/constants/Colours";
import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity,
    ScrollView
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function Profile() {
    const favourites = [
        { id: 1, title: "Hyde Park - Picnic", location: "London", people: 8 },
        { id: 2, title: "Hyde Park - Picnic", location: "London", people: 8 },
        { id: 3, title: "Hyde Park - Picnic", location: "London", people: 8 },
        { id: 4, title: "Hyde Park - Picnic", location: "London", people: 8 },

    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* Profile Header Section */}
                <View style={styles.header}>
                    <View style={styles.avatarContainer}>
                        <View>
                            <Image
                                source={require("@/assets/images/profile.png")}
                                style={styles.avatar}
                            />
                        </View>
                        <Text style={styles.statsText}>
                            Jeff Ching
                        </Text>
                        <Text style={styles.locationText}>London</Text>
                    </View>
                </View>

                {/* Favorites Section */}
                <View style={styles.favoritesContainer}>
                    <Text style={styles.favoritesTitle}>Favourites</Text>
                    <FlatList
                        data={favourites}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.favoriteItem}>
                                <Image
                                    source={require("@/assets/images/river.png")}
                                    style={styles.favoriteImage}
                                />
                                <View style={styles.favoriteTextContainer}>
                                    <Text style={styles.favoriteTitle}>{item.title}</Text>
                                    <Text style={styles.favoriteLocation}>{item.location}</Text>
                                    <Text style={styles.favoritePeople}>
                                        <View style={styles.favoritePeopleContainer}>
                                            <Ionicons name={'person-outline'} size={15} color={Colors.aftersColors.blackColor}
                                            />
                                            <Text>{item.people} </Text>
                                        </View>
                                    </Text>
                                </View>
                            </View>
                        )}
                    />
                </View>

                {/* Refer a Friend Section */}
                <View style={styles.referContainer}>
                    <Text style={styles.referTitle}>Bring the whole crew!</Text>
                    <TouchableOpacity style={styles.referButton}>
                        <Text style={styles.referButtonText}>Refer a friend</Text>
                        <Ionicons name="copy-outline" size={15} color="black" />
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.aftersColors.pinkColor, // Background color for the whole page
    },
    scrollContainer: {
        flexGrow: 1, // Ensures content inside ScrollView can expand
        paddingBottom: 100, // Prevents overlap with TabBar
    },
    header: {
        backgroundColor: Colors.aftersColors.blackColor, // Black header background
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: "center",
        paddingVertical: 30,
    },
    avatarContainer: {
        alignItems: "center",
    },
    avatar: {
        borderRadius: 40,
    },
    statsText: {
        color: Colors.aftersColors.pinkColor,
        fontSize: 16,
        marginTop: 15,
        fontWeight: "bold",
        fontFamily: 'Waveahaus-Bold'
    },
    statsTextSmall: {
        fontWeight: "normal",
        fontSize: 14,
        color: "#FFF",
    },
    locationText: {
        color: Colors.aftersColors.whiteColor,
        fontSize: 14,
        marginTop: 2,
        fontWeight: 400,
        fontFamily: "Waveahaus-Light",
    },
    favoritesContainer: {
        backgroundColor: Colors.aftersColors.yellowColor, 
        width: "90%",
        height: 416,
        overflow: "hidden",
        margin: "auto",
        marginVertical: 10,
        borderRadius: 20,
        paddingTop: 40,
        paddingHorizontal: 18,
    },
    favoritesTitle: {
        fontSize: 28.17,
        fontFamily: 'Waveahaus-Bold',
        color: Colors.aftersColors.blackColor,
        marginBottom: 10,
    },
    favoriteItem: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: Colors.aftersColors.whiteColor,
        borderRadius: 15,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingTop: 10,
        width: "100%",
        height: "auto",
        gap: 5
    },
    favoriteImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    favoriteTextContainer: {
        // flex: 1,
        padding: 10,
        gap: 5,
        // justifyContent: "center",
    },
    favoriteTitle: {
        fontSize: 16,
        fontWeight: "normal",
        fontFamily: 'Waveahaus-Light',
        color: Colors.aftersColors.blackColor,
    },
    favoriteLocation: {
        fontSize: 12,
        color: Colors.aftersColors.blackColor,
        marginVertical: 2,
        fontFamily: 'Waveahaus-Light',
        fontWeight: "normal",
    },
    favoritePeopleContainer: {
        flex: 1,
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
    },
    favoritePeople: {
        fontSize: 16,
        fontWeight: 400,
        color: Colors.aftersColors.blackColor,
    },
    referContainer: {
        backgroundColor: Colors.aftersColors.blackColor, // Black background for "Refer a Friend"
        margin: "auto",
        width:"90%",
        borderRadius: 15,
        padding: 15,
        alignItems: "center",
        marginBottom: 20,
    },
    referTitle: {
        fontSize: 24,
        color: Colors.aftersColors.whiteColor,
        fontWeight: 700,
        fontFamily: 'Waveahaus-Bold',
        marginBottom: 10,
    },
    referButton: {
        flex: 1,
        alignItems: "center",
        gap: 6,
        flexDirection: "row",
        backgroundColor: Colors.aftersColors.yellowColor, // Yellow button
        paddingVertical: 8,
        paddingHorizontal: 25,
        borderRadius: 50,
    },
    referButtonText: {
        fontSize: 15.9,
        color: Colors.aftersColors.blackColor,
        fontFamily: 'Waveahaus-Bold',
    },
});
