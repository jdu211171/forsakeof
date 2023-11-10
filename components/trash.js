import {Modal, Pressable, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

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


import React, { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";

const API_ENDPOINT = "https://api.example.com/messages";

const MessagesComponent = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Subscribe to network state updates
        const unsubscribe = NetInfo.addEventListener((state) => {
            if (state.isConnected) {
                // Fetch messages from the API
                axios
                    .get(API_ENDPOINT)
                    .then(async (response) => {
                        // Store messages in memory
                        const messages = response.data.data;
                        await AsyncStorage.setItem("messages", JSON.stringify(messages));

                        // Set messages state
                        setMessages(messages);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        });

        // Cleanup network state update subscription
        return () => unsubscribe();
    }, []);

    return (
        <ul>
            {messages.map((message) => (
                <li key={message.id}>{message.title}</li>
            ))}
        </ul>
    );
};

export default MessagesComponent;
