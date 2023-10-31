import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

// Define four dummy screens for demonstration
function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    );
}

function SearchScreen() {
    return (
        <View style={styles.container}>
            <Text>Search Screen</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text>Settings Screen</Text>
        </View>
    );
}

function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
        </View>
    );
}

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

// Define the options for each screen in the navigator
const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        // Choose an icon name based on the route name
        if (route.name === 'Home') {
            iconName = 'home';
        } else if (route.name === 'Search') {
            iconName = 'search';
        } else if (route.name === 'Settings') {
            iconName = 'settings';
        } else if (route.name === 'Profile') {
            iconName = 'account-circle';
        }

        // Return an icon component from React Native Elements
        return <Icon name={iconName} size={size} color={color} />;
    },
});

// Define the options for the tab bar
const tabBarOptions = {
    activeTintColor: '#673ab7', // Color for focused icons
    inactiveTintColor: '#222', // Color for inactive icons
};

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={screenOptions}
                tabBarOptions={tabBarOptions}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

// Define some styles for the screen components
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
