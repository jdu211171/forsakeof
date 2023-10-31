import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessagesScreen from "./app/MessagesScreen";
import SettingsScreen from "./app/SettingsScreen";
import BookmarksScreen from "./app/BookmarksScreen";
import LinksScreen from "./app/LinksScreen";
import {View} from "react-native";
import FullReadMode from "./app/FullReadMode";
import {setStatusBarBackgroundColor, StatusBar} from "expo-status-bar";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === 'Xabarlar') {
                                iconName = focused ? 'ios-mail' : 'ios-mail-outline';
                            } else if (route.name === 'Saqlanganlar') {
                                iconName = focused ? 'bookmark' : 'bookmark-outline';
                            } else if (route.name === 'Linklar') {
                                iconName = focused ? 'link' : 'link-outline'; // Changed icon for Linklar
                            } else if (route.name === 'Sozlamalar') {
                                iconName = focused ? 'settings' : 'settings-outline';
                            }

                            // You can return any component that you like here!
                            return focused ? <View style={{ backgroundColor: "#fff", padding: 10, borderRadius: 22 }}><Ionicons name={iconName} size={size} color={color} /></View> : <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: '#0251B2', // Changed active tint color to white
                        tabBarInactiveTintColor: '#fff', // Changed inactive tint color to white
                        tabBarStyle: {
                            backgroundColor: '#1A2857', // Changed tab bar color to dark blue
                        },
                        headerStyle: {
                            backgroundColor: '#1A2857',
                        },
                        headerTitleStyle: {
                            color: '#fff',
                        },
                        headerTitleAlign: 'center',
                    })}
                >
                    <Tab.Screen
                        name="Xabarlar"
                        component={MessagesScreen}
                        options={{
                            tabBarBadge: 99,
                            tabBarBadgeStyle: {
                                fontSize: 10,
                                backgroundColor: '#3867E0',
                            },
                            tabBarShowLabel: false,
                        }}
                    />
                    <Tab.Screen options={{ tabBarShowLabel: false, }} name="Saqlanganlar" component={BookmarksScreen}/>
                    <Tab.Screen options={{ tabBarShowLabel: false, }} name="Linklar" component={LinksScreen} />
                    <Tab.Screen options={{ tabBarShowLabel: false, }} name="Sozlamalar" component={SettingsScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
