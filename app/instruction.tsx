// app/choice.tsx
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




export default function Instruction() {

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Title */}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>HERE YOU GO!</Text>
            </View>


            
        </SafeAreaView>
    );
}




const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.aftersColors.pinkColor,
    },
    titleContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: Colors.aftersColors.whiteColor,
    },
});