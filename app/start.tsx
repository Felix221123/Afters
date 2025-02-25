import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Colors } from "@/constants/Colours";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';


const { width } = Dimensions.get("window");

interface NumberItem {
  item: number; // The number to display
  index: number; // The index in the list
}

export default function Start() {
  const numbers = Array.from({ length: 15 }, (_, i) => i + 1); // Numbers from 1 to 10
  const [activeIndex, setActiveIndex] = useState(3); // Default active number at 4
  const flatListRef = useRef<FlatList<number>>(null);
  const router = useRouter();

  const handleScroll = (event: any) => {
    const offset = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(offset / width);
    setActiveIndex(currentIndex);
  };

  // handle navigation function
  const handleNavigation = () => {
    console.log("Navigation triggered");
    router.push("./mood");
  }

  const renderNumber = ({ item, index }: NumberItem) => (
    <View style={styles.numberContainer}>
      <Text
        style={[
          styles.numberText,
          index === activeIndex ? styles.activeNumber : styles.inactiveNumber,
        ]}
      >
        {item}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>HOW BIG IS THE <Text style={styles.partyText}>PARTY?</Text></Text>
      </View>

      {/* Number Swiper */}
      <View style={styles.swiperContainer}>
        <FlatList
          ref={flatListRef}
          data={numbers}
          keyExtractor={(item) => item.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={handleScroll}
          renderItem={renderNumber}
          initialScrollIndex={3} // Default to "4"
          getItemLayout={(data, index) => ({
            length: width,
            offset: width * index,
            index,
          })}
        />
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.actionButton} onPress={() => handleNavigation()}>
        <MaterialIcons name="arrow-forward-ios" size={65} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.aftersColors.yellowColor, // Yellow background
    position: "relative",
  },
  titleContainer: {
    width: "100%",
    height: "40%",
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: Colors.aftersColors.blackColor, // Black background
    fontFamily:'Bungee-Regular',
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
  partyText: {
    fontSize: 41,
    fontWeight: "bold",
    color: "#B86FBE", // Purple
  },
  swiperContainer: {
    flex: 1,
    justifyContent: "center",
  },
  numberContainer: {
    flex: 1,
    marginTop: 90,
    alignItems: "center",
    width: width,
  },
  numberText: {
    fontSize: 60,
    fontWeight: "bold",
    fontFamily: "Bungee-Regular",
    borderRadius: 9999,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  activeNumber: {
    color: "#FF69B4", // Pink color
    backgroundColor: Colors.aftersColors.blackColor, 
    borderRadius: 9999, 
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  inactiveNumber: {
    color: "#FFFFFF",
    opacity: 0.5,
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
  actionButtonText: {
    fontSize: 30,
    color: Colors.aftersColors.whiteColor, // White arrow
    fontWeight: "bold",
  },
});
