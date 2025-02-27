// app/loading.tsx
import React, { useEffect, useRef } from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Animated
} from "react-native";
import { Colors } from "@/constants/Colours";
import { useRouter } from 'expo-router';



export default function Loading() {
    const router = useRouter();


    // Animated values for each ball
    const scale1 = useRef(new Animated.Value(0)).current;
    const scale2 = useRef(new Animated.Value(0)).current;
    const scale3 = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const createBounceAnimation = (animatedValue: Animated.Value, delay: number) => {
            return Animated.loop(
                Animated.sequence([
                    Animated.delay(delay),
                    Animated.timing(animatedValue, {
                        toValue: 1,
                        duration: 400,
                        useNativeDriver: true,
                    }),
                    Animated.timing(animatedValue, {
                        toValue: 0,
                        duration: 400,
                        useNativeDriver: true,
                    }),
                ])
            );
        };

        createBounceAnimation(scale1, 0).start();
        createBounceAnimation(scale2, 150).start();
        createBounceAnimation(scale3, 300).start();

        // Navigate to "choice" screen after 3 seconds
        const timeout = setTimeout(() => {
            router.push("./choice");  
        }, 3000);

        return () => clearTimeout(timeout); 
    }, []);






    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.loadingContainer}>
                    <Animated.View style={[styles.ball, { transform: [{ scale: scale1 }] }]} />
                    <Animated.View style={[styles.ball, { transform: [{ scale: scale2 }] }]} />
                    <Animated.View style={[styles.ball, { transform: [{ scale: scale3 }] }]} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>Analysing your mood.</Text>
                    <Text style={styles.subheading}>Searching places around you....</Text>
                    <Text style={styles.subheading}>Almost there....</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}










const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.aftersColors.blackColor
    },
    mainContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",             
        position: "absolute",      
        top: "50%",               
        transform: [{ translateY: -50 }], 
    },
    textContainer: {
        flex: 1,
        alignItems: "center",
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        color: Colors.aftersColors.whiteColor,
        fontFamily: 'Waveahaus-SemiBold'
    },
    loadingContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 100,
        marginBottom: 15
    },
    ball: {
        width: 23,
        height: 23,
        borderRadius: 50,
        backgroundColor: Colors.aftersColors.pinkColor,
    },
    subheading: {
        fontSize: 16,
        marginBottom: 5,
        color: Colors.aftersColors.whiteColor,
        fontFamily: 'Waveahaus-Light'
    }
});