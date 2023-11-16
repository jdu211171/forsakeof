import * as React from "react";
import {useEffect, useMemo, useState} from "react";
import { View, StyleSheet, ScrollView, RefreshControl } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import axios from "axios";
import Message from "../../components/Message";
import FlatList, {FlashList} from "@shopify/flash-list";
import Toast from 'react-native-root-toast';
export default function Messages() {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [messages, setMessages] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const fetchMessages = async () => {
        const state = await NetInfo.fetch();
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
        } else {
            Toast.show('You are offline. Displaying locally saved messages.', {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
            });
            const  localMessages= await  AsyncStorage.getItem("messages")
            if(localMessages) {
                setMessages(JSON.parse(localMessages).map((message) => ({
                    key: message.id,
                    ...message,
                })));
            }
        }
    };

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        fetchMessages().then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        fetchMessages();
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
        <ScrollView
            contentContainerStyle={{width: '100%', alignItems: 'center', paddingLeft: 5, paddingRight: 5, paddingTop: 8 }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
        >
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
        </ScrollView>
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
