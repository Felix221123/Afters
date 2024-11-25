import React, { useEffect } from 'react';
import { View, StyleSheet, Image, SafeAreaView, StatusBar } from "react-native";
import { Colors } from "@/constants/Colours";
import { router } from 'expo-router';


export default function Index() {

  // const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/signup");
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [router]);


  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.aftersColors.pinkColor} />
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/logo-icon.png")}
          style={styles.imageStyle}
        />
      </View>
    </SafeAreaView>
  );
}







const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.aftersColors.pinkColor, // Purple background
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle:{
    width: "45%",
    height: "25%"
  }
});
