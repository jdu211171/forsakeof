import {View} from "react-native";

export default function FullReadMode({ route }) {
    const { message } = route.params;

    return (
        <View>
            <Text>{message.title}</Text>
            <Text>{message.message}</Text>
            <Text>{message.time}</Text>
        </View>
    );
}
