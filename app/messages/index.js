import * as React from "react";
import { View, StyleSheet } from "react-native";
import Message from "../../components/Message";

export default function Messages() {
    const [modalVisible, setModalVisible] = React.useState(false);
    const apiUrl = process.env.AWS_PUBLIC_API_URL;
    return (
        <View style={{ flex: 1, alignItems: 'center', paddingLeft: 5, paddingRight: 5, paddingTop: 8 }}>
            <Message
                messageIconName="information-circle"
                messageIconColor="#0386D0"
                messageTitle="Muhim xabar!!!"
                messageText="Farzandingiz Abduxakimov Abdulla oldingi semestrdagi qarzlari haligacha yopilmaganligi uchun JDU talabalari safidan chiqarilishi mumkin! Oxirgi ogohlantirish, zudlik bilan Kotibiyatga uchrashing. JDU talabalari safidan chiqarilish bo`yicha buyruq tayyorlandi."
                date="12:23 AM・30 Apr 2021"
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        padding: 10,
        rowGap: 8,
        backgroundColor: 'white'
    },
    flexing: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        columnGap: 3,
    },
    title: {
        fontSize: 16,
    },
    message: {
        fontSize: 14,
    },
    time: {
        color: '#575757',
        fontSize: 10,
    },
})
