import { Tabs, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Platform, StatusBar, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importing Ionicons for tab icons
import { Colors } from '@/constants/Colours';

export default function TabLayout() {
    const [activeTab, setActiveTab] = useState('Home'); // Track the active tab

    const updateStatusBar = (tabName: string) => {
        setActiveTab(tabName);
        StatusBar.setBarStyle(tabName === 'Home' ? 'dark-content' : 'light-content');
    };

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.aftersColors.whiteColor, 
                tabBarInactiveTintColor: 'gray', 
                headerShown: false, 
                tabBarShowLabel: false,
                tabBarStyle: Platform.select({
                    ios: {
                        position: 'absolute', 
                        backgroundColor: Colors.aftersColors.blackColor,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        height: 75,
                        paddingTop: 15
                    },
                    default: {
                        position: 'absolute',
                        backgroundColor: Colors.aftersColors.blackColor,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        height: 75,
                        paddingTop: 15
                    },
                }),
                tabBarLabelStyle: {
                    fontSize: 12, 
                    marginTop: 5, 
                },
            }}>
            <Tabs.Screen
                name="reward"
                options={{
                    title: 'Reward',
                    tabBarIcon: ({ focused, color }) => (
                        <View style={{ alignItems: 'center' }}>
                            <Ionicons
                                name={focused ? 'heart' : 'heart-outline'}
                                size={25}
                                color={color}
                            />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: 'Explore',
                    tabBarIcon: ({ focused, color }) => (
                        <View style={{ alignItems: 'center' }}>
                            <Ionicons
                                name={focused ? 'globe' : 'globe-outline'}
                                size={25}
                                color={color}
                            />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ focused, color }) => (
                        <View style={{ alignItems: 'center' }}>
                            <Ionicons
                                name={focused ? 'person' : 'person-outline'}
                                size={25}
                                color={color}
                            />
                        </View>
                    ),
                }}
            />
        </Tabs>
    );
}
