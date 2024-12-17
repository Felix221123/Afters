// home page
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    FlatList,
    TouchableOpacity,
    ImageBackground
} from "react-native";
import { Colors } from "@/constants/Colours";
import Feather from '@expo/vector-icons/Feather';

export default function Reward() {
    const promotions = [
        {
            id: 1,
            title: "Wetherspoons",
            description: "Free Beer on us!",
            image: require("@/assets/images/beer.png"),
        },
        {
            id: 2,
            title: "TeamSport Go Karting",
            description: "Group of 8 gets 20% off",
            image: require("@/assets/images/beer.png"),
        },
    ];

    const renderCircle = (type: "filled" | "empty" | "gift", image: any | null = null) => {
        if (type === "filled") {
            return (
                <View style={styles.circleContainer}>
                    <Image source={image} style={styles.circleImage} />
                    <View style={styles.checkmark}>
                        <Feather name="check" size={40} color="white" />
                    </View>
                </View>
            );
        }
        if (type === "gift") {
            return (
                <View style={[styles.circleContainer, styles.giftCircle]}>
                    <Image source={image} style={styles.circleImage} />

                </View>
            );
        }
        return <View style={styles.emptyCircle}></View>;
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* My Collection Section */}
            <View style={styles.collectionContainer}>
                <Text style={styles.collectionTitle}>My Collection (3)</Text>
                <View style={styles.grid}>
                    {renderCircle("filled", require("@/assets/images/flowers-filled-store.png"))}
                    {renderCircle("filled", require("@/assets/images/flowers-filled-store.png"))}
                    {renderCircle("gift", require("@/assets/images/black-circle.png"))}
                    {renderCircle("gift", require("@/assets/images/black-circle.png"))}
                    {renderCircle("gift")}
                    {renderCircle("gift")}
                    {renderCircle("gift")}
                    {renderCircle("gift")}
                    {renderCircle("gift", require("@/assets/images/black-circle.png"))}
                    {renderCircle("gift")}
                    {renderCircle("gift")}
                    {renderCircle("gift")}
                </View>
            </View>

            {/* Promotions Section */}
            <FlatList
                data={promotions}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.promotionsContainer}
                renderItem={({ item }) => (
                    <View style={styles.promotionCard}>
                        <ImageBackground source={item.image} style={styles.promotionImage}>
                            <View style={styles.promotionOverlay}>
                                <Text style={styles.promotionTitle}>{item.title}</Text>
                                <Text style={styles.promotionDescription}>{item.description}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.aftersColors.pinkColor, // Pink-purple background
        paddingTop: 25,
    },
    collectionContainer: {
        backgroundColor: Colors.aftersColors.yellowColor, // Yellow background
        width: "90%",
        margin: "auto",
        borderRadius: 15,
        paddingTop: 30,
        paddingHorizontal: 15,
        paddingBottom: 10,
    },
    collectionTitle: {
        fontSize: 28.17,
        fontFamily: "Waveahaus-Bold",
        color: Colors.aftersColors.blackColor,
        marginBottom: 15,
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    circleContainer: {
        width: 95,
        height: 95,
        borderRadius: 50,
        overflow: "hidden",
        backgroundColor: Colors.aftersColors.whiteColor,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    circleImage: {
        width: "100%",
        height: "100%",
        borderRadius: 40,
    },
    emptyCircle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: "#D9A5E4",
        marginBottom: 10,
    },
    giftCircle: {
        backgroundColor: Colors.aftersColors.whiteColor,
    },
    giftText: {
        fontSize: 24,
        color: Colors.aftersColors.whiteColor,
    },
    checkmark: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -20 }, { translateY: -20 }]
    },
    promotionsContainer: {
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    promotionCard: {
        width: 212,
        height: 154,
        borderRadius: 20,
        overflow: "hidden",
        marginRight: 15,
        backgroundColor: "transparent", // Make background transparent to show image
    },
    promotionImage: {
        flex: 1,
        justifyContent: "flex-end", // Align text at the bottom of the image
    },
    promotionOverlay: {
        flex: 1,
        justifyContent: "space-between",
        paddingTop: 15,
    },
    promotionTitle: {
        fontSize: 12,
        marginLeft: 10,
        fontFamily: 'Waveahaus-Light',
        fontWeight: 500,
        paddingHorizontal: 5,
        borderRadius: 5,
        paddingVertical: 2,
        backgroundColor: Colors.aftersColors.whiteColor, // White text for contrast
        color: Colors.aftersColors.blackColor, // Purple text
        alignSelf: "flex-start"
    },
    promotionDescription: {
        fontSize: 12,
        backgroundColor: Colors.aftersColors.yellowColor,
        color: Colors.aftersColors.blackColor,
        fontFamily: 'Waveahaus-Bold',
        alignSelf: "flex-start",
        marginBottom: 15,
        marginLeft: 3,
        fontWeight: 700,
        paddingHorizontal: 10,
        paddingVertical: 2,
        overflow: "hidden",
        
    },

});
