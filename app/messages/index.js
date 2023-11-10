import * as React from "react";
import {useEffect, useMemo, useState} from "react";
import { View, StyleSheet } from "react-native";
import { FileSystem } from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import axios from "axios";
import Message from "../../components/Message";
import FlatList, {FlashList} from "@shopify/flash-list";


export default function Messages() {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [messages, setMessages] = useState([]);
    const apiUrl = process.env.AWS_API_ENDPOINT;
    const allMessagesUrl = process.env.ALL_MESSAGES;

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
           if (state.isConnected) {
               axios
                   .get("https://wfjz3m1ilh.execute-api.eu-north-1.amazonaws.com/default/api/messages")
                   .then(async (response) => {
                       const messages = response.data.data;
                       await AsyncStorage.setItem("messages", JSON.stringify(messages));
                       setMessages(messages.map((message) => ({
                           key: message.id,
                           ...message,
                       })));
                   })
                   .catch((error) => {
                       console.log(error);  
                   });
           }
        });
        
        return () => unsubscribe();
    },[]);

    const renderItem = useMemo(() => {
        return ({item}) => {
            return (
                <View style={{width: '100%', alignItems: 'center', paddingLeft: 5, paddingRight: 5, paddingTop: 8 }}>
                    {messages.map((message) => (
                        <Message
                            key={message.id}
                            messageIconName="information-circle"
                            messageIconColor="#0386D0"
                            messageTitle={message.title}
                            messageText={message.description}
                            date={message.updated_date}
                        />
                    ))}
                </View>
            );
        }
    }, [messages]);

    return (
        // <FlashList
        //     width="100%"
        //     heigth="100%"
        //     data={messages}
        //     renderItem={renderItem}
        //     estimatedItemSize={100}
        // />
        <View style={{width: '100%', alignItems: 'center', paddingLeft: 5, paddingRight: 5, paddingTop: 8 }}>
            {messages.map((message) => (
                <Message
                    key={message.id}
                    messageIconName="information-circle"
                    messageIconColor="#0386D0"
                    messageTitle={message.title}
                    messageText={message.description}
                    date={message.updated_date}
                />
            ))}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: 700,
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
