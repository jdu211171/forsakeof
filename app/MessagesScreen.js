import {Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import Message from "../components/Message";
export default function MessagesScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', paddingLeft: 5, paddingRight: 5, paddingTop: 8 }}>
            <TouchableOpacity onPress={() => navigation.navigate('FullReadMode', {
                message: {
                    title: "Muhim xabar!!!",
                    message: "Farzandingiz Abduxakimov Abdulla oldingi semestrdagi qarzlari haligacha yopilmaganligi uchun JDU talabalari safidan chiqarilishi mumkin! Oxirgi ogohlantirish, zudlik bilan Kotibiyatga uchrashing. JDU talabalari safidan chiqarilish bo`yicha buyruq tayyorlandi.",
                    time: "12:23 AM・30 Apr 2021",
                }
            })}>
                <Message
                    title="Muhim xabar!!!"
                    message="Farzandingiz Abduxakimov Abdulla oldingi semestrdagi qarzlari haligacha yopilmaganligi uchun JDU talabalari safidan chiqarilishi mumkin! Oxirgi ogohlantirish, zudlik bilan Kotibiyatga uchrashing. JDU talabalari safidan chiqarilish bo`yicha buyruq tayyorlandi."
                    time="12:23 AM・30 Apr 2021"
                />
            </TouchableOpacity>
        </View>
    );
}