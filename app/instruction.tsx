import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { Colors } from "@/constants/Colours";
import { useLocalSearchParams } from "expo-router";
import data from '@/data.json';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



export default function Instruction() {
    const params = useLocalSearchParams()
    const index = Array.isArray(params.index) ? params.index[0] : params.index; // Ensure index is a string
    const item = data[Number(index)]; // Convert index safely to number

    if (!item) return <Text style={styles.errorText}>No data found</Text>;

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Image */}
            <Image source={require("@/assets/images/river.png")} style={styles.image} />

            {/* Content */}
            <View style={styles.content}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>

                <View style={styles.details}>
                    <View style={styles.iconRow}>
                        <MaterialIcons name="location-on" size={20} color="white" />
                        <Text style={styles.text}>{item.address.street}, {item.address.city}</Text>
                    </View>
                    <View style={styles.iconRow}>
                        <MaterialIcons name="attach-money" size={20} color="white" />
                        <Text style={styles.text}>{item.price}</Text>
                    </View>
                </View>

                <View>
                    <Image source={require("@/assets/images/map.png")} style={styles.image} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.aftersColors.blackColor,
    },
    image: {
        width: "100%",
        height: 250,
        borderRadius: 15,
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: Colors.aftersColors.whiteColor,
        marginBottom: 10,
        fontFamily: 'Waveahaus-Bold'
    },
    description: {
        fontSize: 16,
        color: Colors.aftersColors.whiteColor,
        textAlign: "left",
        marginBottom: 15,
        fontFamily: 'Waveahaus-Thin'
    },
    details: {
        flexDirection: "column",
        gap: 10,
        marginBottom: 20
    },
    iconRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    text: {
        fontSize: 16,
        color: Colors.aftersColors.whiteColor,
        marginBottom: 5,
        fontFamily: 'Waveahaus-Thin'
    },
    errorText: {
        fontSize: 18,
        color: "red",
        marginTop: 20,
    }
});
