// app/choice.tsx
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



const { width, height } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.73;
const ITEM_HEIGHT = height * 0.57
const SPACING = 13
const SCALE_FACTOR = 1.1; // Scale factor for active card




export default function Choice() {
    const router = useRouter();
    const scrollX = useRef(new Animated.Value(0)).current;
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        console.log(activeIndex, ' is the active');
        
    }, [activeIndex]);


    // handle navigation to instruction page
    const handleNavigation = () => {
        console.log("Navigation triggered");
        router.push("./instruction");
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Title */}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>HERE YOU GO!</Text>
            </View>


            {/* Swipeable List */}
            <View style={styles.swipeableContainer}>
                <Animated.FlatList
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    snapToAlignment="center"
                    snapToInterval={ITEM_WIDTH + SPACING}
                    decelerationRate="fast"
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{ paddingHorizontal: (width - ITEM_WIDTH) / 2 }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    onMomentumScrollEnd={(event) => {
                        let index = Math.round(event.nativeEvent.contentOffset.x / (ITEM_WIDTH + SPACING));
                        setActiveIndex(index);
                    }}
                    renderItem={({ item, index }) => {
                        const inputRange = [
                            (index - 1) * ITEM_WIDTH,
                            index * ITEM_WIDTH,
                            (index + 1) * ITEM_WIDTH,
                        ];

                        const scale = scrollX.interpolate({
                            inputRange,
                            outputRange: [1, SCALE_FACTOR, 1],
                            extrapolate: "clamp",
                        });

                        return (
                            <Animated.View style={[styles.card, { transform: [{ scale }] }]}>
                                <Image
                                    source={require("@/assets/images/river.png")} // Placeholder image
                                    style={styles.image}
                                />
                                <View style={styles.cardContent}>
                                    <Text style={styles.cardTitle}>{item.name}</Text>
                                    <Text style={styles.cardDescription}>{item.description}</Text>
                                    <View style={styles.iconRow}>
                                        <MaterialIcons name="location-on" size={20} color="white" />
                                        <Text style={styles.cardInfo}>{item.address.street}, {item.address.city}</Text>
                                    </View>
                                    <View style={styles.iconRow}>
                                        <MaterialIcons name="attach-money" size={20} color="white" />
                                        <Text style={styles.cardInfo}>{item.price}</Text>
                                    </View>
                                </View>
                            </Animated.View>
                        );
                    }}
                />
            </View>






            {/* Button */}
            {/* Action Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.shuffleButton}>
                    <MaterialIcons name="shuffle" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton} onPress={handleNavigation}>
                    <MaterialIcons name="arrow-forward-ios" size={50} color="white" />
                </TouchableOpacity>
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
        width: "100%",
        height: "40%",
        paddingTop: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: Colors.aftersColors.blackColor, // Black background
        fontFamily: 'Bungee-Regular',
        fontWeight: 400,
        fontSize: 45,
        borderEndEndRadius: "50%",
        borderEndStartRadius: "50%"
    },
    title: {
        fontSize: 41,
        fontWeight: "bold",
        color: "#FFFFFF",
        fontFamily: 'Bungee-Regular',
        lineHeight: 40,
    },
    swipeableContainer: {
        position: "absolute",
        top: "20%",
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
    },
    card: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        backgroundColor: Colors.aftersColors.blackColor,
        borderRadius: 15,
        overflow: "hidden",
        marginHorizontal: SPACING,
        alignItems: "center",
        top: 30
    },
    image: {
        width: "100%",
        height: "50%",
        borderRadius: 20,
    },
    cardContent: {
        padding: 15,
        flex: 1,
        justifyContent: "space-between",
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.aftersColors.whiteColor,
        fontFamily: 'Waveahaus-Bold',
        marginBottom: 5,
    },
    cardDescription: {
        fontSize: 14,
        color: Colors.aftersColors.whiteColor,
        marginBottom: 5,
        fontFamily:'Waveahaus-Light'
    },
    iconRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    cardInfo: {
        fontSize: 15,
        color: "white",
        fontFamily:'Waveahaus-Light',
        marginLeft: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        position: "relative",
        bottom: -400,
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    shuffleButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: Colors.aftersColors.blackColor,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: 170,
        top: -50,
    },
    actionButton: {
        marginTop: 50,
        position: "absolute",
        bottom: -70,
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