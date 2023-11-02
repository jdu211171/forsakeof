import {View, Text} from "react-native";
import React from 'react';

export default function FullReadMode({ route }) {
    const { title, message, time } = route.params.message;

    return (
        <View>
            <Text>{title}</Text>
            <Text>{message}</Text>
            <Text>{time}</Text>
        </View>
    );
}
