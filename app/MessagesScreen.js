import * as React from "react";
import {Text, Pressable, View, Modal, StyleSheet, Platform, TouchableOpacity} from "react-native";
import Message from "../components/Message";
import {Ionicons} from "@expo/vector-icons";

export default function MessagesScreen() {
    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <View style={{ flex: 1, alignItems: 'center', paddingLeft: 5, paddingRight: 5, paddingTop: 8 }}>
            <Pressable onPress={() => setModalVisible(true)}>
                <Message
                    title="Muhim xabar!!!"
                    message="Farzandingiz Abduxakimov Abdulla oldingi semestrdagi qarzlari haligacha yopilmaganligi uchun JDU talabalari safidan chiqarilishi mumkin! Oxirgi ogohlantirish, zudlik bilan Kotibiyatga uchrashing. JDU talabalari safidan chiqarilish bo`yicha buyruq tayyorlandi."
                    time="12:23 AM・30 Apr 2021"
                />
            </Pressable>
            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
                hardwareAccelerated={true}

            >
                <View style={{flex: 1, backgroundColor: 'white'}}>
                        <Pressable
                            style={{ backgroundColor:"#1A2857", width: '100%', padding:10, elevation:2}}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Ionicons
                                name={'ios-arrow-back'}
                                size={30}
                                color={'#ffffff'}
                            />
                        </Pressable>
                    <View style={styles.container}>
                        <View style={styles.flexing}>
                            <View style={styles.flexing}>
                                <Ionicons
                                    name={'information-circle-outline'}
                                    size={24}
                                    color={'#0386D0'}
                                />
                                <Text style={styles.title}>Muhim xabar!!!</Text>
                            </View>
                            <TouchableOpacity onPress={() => setState(prevState => !prevState)}>
                                <Ionicons
                                    name={'bookmark-outline'}
                                    size={24}
                                    color={'#0386D0'}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.message}>Farzandingiz Abduxakimov Abdulla oldingi semestrdagi qarzlari haligacha yopilmaganligi uchun JDU talabalari safidan chiqarilishi mumkin! Oxirgi ogohlantirish, zudlik bilan Kotibiyatga uchrashing. JDU talabalari safidan chiqarilish bo`yicha buyruq tayyorlandi.</Text>
                        <Text style={styles.time}>12:23 AM・30 Apr 2021</Text>
                    </View>
                </View>
            </Modal>
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
