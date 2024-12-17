// app/signup.tsx
import { Colors } from '@/constants/Colours';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';


export default function Signup() {
    const [inputFocused, setInputFocused] = useState(false);
    const router = useRouter();
    console.log(router); 



    return (
        <View style={styles.container}>
            <Image
                source={require("@/assets/images/logo-forsignup.png")}
                style={styles.logo}
            />
            <View style={styles.formContainer}>
                <Text style={styles.formHeader}>Create your account</Text>
                <TextInput
                    style={[
                        styles.input,
                        { color: inputFocused ? Colors.aftersColors.blackColor : 'rgba(0, 0, 0, 0.7)' }, // Change color based on state
                    ]}
                    placeholder="Email"
                    placeholderTextColor='rgba(0, 0, 0, 0.7)'
                    onFocus={() => setInputFocused(true)} // Set to true when focused
                    onBlur={() => setInputFocused(false)} // Reset when focus is lost
                />
                <TextInput
                    style={[
                        styles.input,
                        { color: inputFocused ? Colors.aftersColors.blackColor : 'rgba(0, 0, 0, 0.7)' },
                    ]}
                    placeholder="Password"
                    placeholderTextColor='rgba(0, 0, 0, 0.7)'
                    secureTextEntry
                    onFocus={() => setInputFocused(true)}
                    onBlur={() => setInputFocused(false)}
                />
                <TextInput
                    style={[
                        styles.input,
                        { color: inputFocused ? Colors.aftersColors.blackColor : 'rgba(0, 0, 0, 0.7)' },
                    ]}
                    placeholder="Username"
                    placeholderTextColor='rgba(0, 0, 0, 0.7)'
                    onFocus={() => setInputFocused(true)}
                    onBlur={() => setInputFocused(false)}
                />
                <TouchableOpacity style={styles.button}  onPress={() => router.push('/(tabs)/reward')}>
                    <Text style={styles.buttonText}>Let's Go!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.aftersColors.pinkColor, // Purple background
        alignItems: 'center',
        justifyContent: 'center',
    },
    formHeader: {
        fontSize: 26,
        fontWeight: 700,
        marginBottom: 20,
        color: Colors.aftersColors.whiteColor,
        fontFamily: 'Waveahaus-Bold'
    },
    logo: {
        width: "40%",
        height: "9%",
        marginBottom: 15
    },
    formContainer: {
        width: '80%',
        backgroundColor: '#000',
        paddingVertical: 30,
        paddingHorizontal: 25,
        borderRadius: 20,
        alignItems: 'center',
    },
    input: {
        width: "100%",
        height: 36,
        backgroundColor: Colors.aftersColors.yellowColor,
        marginBottom: 12,
        borderRadius: 20,
        paddingHorizontal: 20,
        fontSize: 15,
        fontWeight: 200,
        fontFamily: 'Waveahaus-Thin'
    },
    button: {
        marginTop: 10,
        backgroundColor: Colors.aftersColors.whiteColor,
        borderRadius: 50,
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
