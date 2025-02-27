// app/complete.tsx
import React, { useState, useRef, useEffect } from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated,
    FlatList,
    Dimensions,
    Image
} from "react-native";
import { Colors } from "@/constants/Colours";
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import data from '@/data.json';
import Feather from '@expo/vector-icons/Feather';



export default function Complete() {
    const router = useRouter();

    // handle navigation function
    const handleNavigation = () => {
        console.log("Navigation triggered");
        router.push("./(tabs)/reward");
    }


    return (
        <SafeAreaView style={styles.safeArea}>
            <View>
                {/* Title */}
                <Text style={styles.title}>HOPE YOU ENJOYED THIS <Text style={styles.partyText}>TRIP!</Text></Text>

                <View style={styles.mainCircleContainer}>
                    <View style={styles.circleContainer}>
                        <Image source={require("@/assets/images/river.png")} style={styles.circleImage} />
                        <View style={styles.checkmark}>
                            <Feather name="check" size={40} color="white" />
                        </View>
                    </View>

                    {/* rating */}
                </View>


            </View>


            {/* button for going home */}
            <View style={styles.buttonContainer}>

                {/* white button for adding to favorites */}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> Add to favourites </Text>
                    <MaterialIcons name="favorite-border" size={30} color="black" />
                </TouchableOpacity>

                {/* button for home */}
                <MaterialIcons name="arrow-forward-ios" size={50} color="white" onPress={() => handleNavigation()}/>
            </View>



        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.aftersColors.pinkColor,
    },
    title: {
        fontSize: 51,
        fontWeight: "bold",
        color: Colors.aftersColors.blackColor,
        fontFamily: 'Bungee-Regular',
        lineHeight: 45,
        padding: 20,
        marginTop: 30
    },
    partyText: {
        fontSize: 41,
        fontWeight: "bold",
        color: Colors.aftersColors.yellowColor,
    },
    mainCircleContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },
    circleContainer: {
        width: 200,
        height: 200,
        borderRadius: 100,
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
    checkmark: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -20 }, { translateY: -20 }],
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        width: "100%",
        padding: 50,
        gap: 20,
        backgroundColor: Colors.aftersColors.blackColor,
        borderTopLeftRadius: 190,
        borderTopRightRadius: 190

    },
    button: {
        marginTop: 10,
        backgroundColor: Colors.aftersColors.whiteColor,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 25,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.aftersColors.blackColor,
        fontFamily: 'Waveahaus-Bold'
    },
});