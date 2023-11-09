import React, {useState} from 'react';
import {View, Text, StyleSheet, Platform, TouchableOpacity, Pressable, Modal} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import ModalView from "./ModalView";

const Message = ({ messageIconName, messageIconColor, messageTitle, messageText, date }) => {
    const [showModal, setShowModal] = useState(false);
    let [state, setState] = useState(false);
    const handleOpenModal = () => {
        setShowModal(true);
    }
    return (
        <>
            <Pressable onPress={handleOpenModal}>
                <View style={[styles.container, styles.shadow]}>
                    <View style={styles.flexing}>
                        <View style={styles.flexing}>
                            <Ionicons
                                name={'ellipse'}
                                size={8}
                                color={'#0386D0'}
                            />
                            <Ionicons
                                name={messageIconName}
                                size={24}
                                color={messageIconColor}
                            />
                            <Text style={styles.title}>{messageTitle}</Text>
                        </View>
                        <TouchableOpacity style={{ width: 30, height: 30 }} onPress={() => setState(prevState => !prevState)}>
                            <Ionicons
                                name={state ? 'bookmark-outline' : 'bookmark'}
                                size={24}
                                color={'#0386D0'}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.message}>{messageText}</Text>
                    <Text style={styles.time}>{date}</Text>
                </View>
            </Pressable>
            {showModal &&
                <ModalView
                    key={Date.now()}
                    messageIconName={messageIconName}
                    messageIconColor={messageIconColor}
                    messageTitle={messageTitle}
                    bookmarkIconState={state}
                    bookmarkIconSetState={setState}
                    messageText={messageText}
                    date={date}
                    showModal={showModal}
                    setShowModal={setShowModal}
            />}
        </>
    );
};

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
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0, 0, 0, 0.45)',
                shadowOffset: {width: 0, height: 0},
                shadowOpacity: 0.45,
                shadowRadius: 2,
            },
            android: {
                elevation: 2,
            }
        })
    },
    title: {
        fontSize: 16,
        fontWeight: "bold"
    },
    message: {
        fontSize: 14,
        fontWeight: "bold"
    },
    time: {
        color: '#575757',
        fontSize: 10,
    }

})

export default Message;
