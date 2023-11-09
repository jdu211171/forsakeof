import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Messages from "./app/messages";
import Bookmarks from "./app/bookmarks";
import Settings from "./app/settings";
import Links from "./app/links";
import Index from "./app/links";
import {View} from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();


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

                            return focused ? <View style={{ backgroundColor: "#fff", padding: 10, width: 44, height: 44, borderRadius: 22 }}><Ionicons name={iconName} size={size} color={color} /></View> : <Ionicons name={iconName} size={size} color={color} />;
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
                        component={Messages}
                        options={{
                            tabBarBadge: 99,
                            tabBarBadgeStyle: {
                                fontSize: 10,
                                backgroundColor: '#3867E0',
                            },
                            tabBarShowLabel: false,
                        }}
                    />
                    <Tab.Screen options={{ tabBarShowLabel: false, }} name="Saqlanganlar" component={Bookmarks}/>
                    <Tab.Screen options={{ tabBarShowLabel: false, }} name="Linklar" component={Links} />
                    <Tab.Screen options={{ tabBarShowLabel: false, }} name="Sozlamalar" component={Settings} />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
