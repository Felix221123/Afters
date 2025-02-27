// app/mood.tsx
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Colors } from "@/constants/Colours";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

export default function Mood() {
    const router = useRouter();


    const wordsList:string[] = [
        "Adventurous",
        "Curious",
        "Energetic",
        "Mindful",
        "Creative",
        "Nostalgic",
        "Playful",
        "Competitive",
        "Romantic",
        "Reflective",
        "Relax"
    ];



    // handle navigation function
    const handleNavigation = () => {
        console.log("Navigation triggered");
        router.push("./loading");
    }

    // Track selected moods
    const [chosenMoods, setChosenMoods] = useState<string[]>([]);

    const handleSelectMood = (mood: string) => {
        setChosenMoods((prev) => {
        if (prev.includes(mood)) {
            // If already selected, remove from list
            return prev.filter((m) => m !== mood);
        } else if (prev.length < 3) {
            // If not selected and less than 3 selected, add to list
            return [...prev, mood];
        }
        return prev;
        });
        console.log("Selected moods:", chosenMoods);
        
    };




    return (
        <SafeAreaView style={styles.container}>
            {/* Title */}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>WHAT IS YOUR <Text style={styles.partyText}>MOOD</Text> TODAY?</Text>
                <View style={styles.yellowBorder}>
                    <Text style={styles.moodPicking}>Pick 3 Maximum</Text>
                </View>
            </View>


            {/* Words */}
            <View style={styles.wordsContainer}>
            {wordsList.map((mood, index) => (
                <TouchableOpacity
                    key={mood}
                    style={[
                    styles.moodButton,
                    {
                        width: getSize(index), 
                        height: getSize(index),
                        backgroundColor: chosenMoods.includes(mood) ? Colors.aftersColors.pinkColor : Colors.aftersColors.whiteColor, // Pink if selected
                    },
                    ]}
                    onPress={() => handleSelectMood(mood)}
                >
                    <Text style={styles.moodText}>{mood}</Text>
                </TouchableOpacity>
                ))}
            </View>


            {/* Button */}
            <TouchableOpacity style={styles.actionButton} onPress={handleNavigation}>
                <MaterialIcons name="arrow-forward-ios" size={65} color="white" />
            </TouchableOpacity>
        </SafeAreaView>
    )


}



const getSize = (index: number) => {
    const sizes = [110, 120, 140, 85, 95, 130]; // Different sizes
    return sizes[index % sizes.length];
};



const styles = StyleSheet.create({
    container: {
        flex: 1,        
        backgroundColor: Colors.aftersColors.yellowColor,
        position: "relative",
    },
    titleContainer: {
        width: "100%",
        height: "30%",
        paddingTop: 50,
        backgroundColor: Colors.aftersColors.blackColor, // Black background
        fontFamily:'Bungee-Regular',
        fontWeight: 400,
        fontSize: 45,
        position: "relative",
    },
    title: {
        fontSize: 41,
        fontWeight: "bold",
        color: "#FFFFFF",
        fontFamily: 'Bungee-Regular',
        lineHeight: 40,
        paddingLeft: 30
    },
    partyText: {
        fontSize: 41,
        fontWeight: "bold",
        color: "#B86FBE", // Purple
    },
    yellowBorder: {
        width: "100%",
        height: "30%",
        backgroundColor: Colors.aftersColors.yellowColor,
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: "100%",
        borderTopRightRadius: "100%"
    },
    moodPicking: {
        fontSize: 15,
        fontWeight: "medium",
        color: Colors.aftersColors.blackColor,
        fontFamily: 'Waveahaus-SemiBold',
        textAlign: "center",
        marginTop: 20
    },
    wordsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        paddingHorizontal: 5,
    },
    moodButton: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 9999, // Makes it circular
        margin: 10,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    moodText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
    },
    actionButton: {
        marginTop: 50,
        position: "absolute",
        bottom: 20,
        right: 20,
        width: 110,
        height: 110,
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
});