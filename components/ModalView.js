import {Modal, Platform, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import React, {useState} from "react";
export default function ModalView({ messageIconName, messageIconColor, messageTitle, bookmarkIconState, bookmarkIconSetState, messageText, date, showModal, setShowModal }) {
    let [iconState, setIconState] = useState(bookmarkIconState);
    return (
        <View>
            <Modal
                animationType="none"
                transparent={false}
                visible={true}
                onRequestClose={() => {
                    setShowModal(!showModal);
                }}
                hardwareAccelerated={true}

            >
                <View style={styles.tabHeader}>
                    <Pressable
                        onPress={
                            () => {
                                setShowModal(!showModal);
                                bookmarkIconSetState(iconState);
                            }
                        }
                        style={{ display: 'flex', position: 'absolute', left: 15, paddingTop: Platform.select({ ios: 30 })}}
                    >
                        <Ionicons
                            name={'arrow-back-outline'}
                            size={35}
                            color={'#ffffff'}
                        />
                    </Pressable>
                    <Text style={{
                        color: "#ffffff",
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: "600"
                    }}>
                        {messageTitle}
                    </Text>
                </View>

                <View style={[styles.container, styles.shadow]}>
                    {/* Use a light status bar on iOS to account for the black space above the modal */}
                    {/*<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />*/}
                    <View style={styles.flexing}>
                        <View style={styles.flexing}>
                            <Ionicons
                                name={messageIconName}
                                size={24}
                                color={messageIconColor}
                            />
                            <Text style={styles.title}>{messageTitle}</Text>
                        </View>
                        <TouchableOpacity onPress={() => setIconState(prevIconState => !prevIconState)}>
                            <Ionicons
                                name={iconState ? 'bookmark' : 'bookmark-outline'}
                                size={24}
                                color={'#0386D0'}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.message}>{messageText}</Text>
                    <Text style={styles.time}>{date}</Text>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    tabHeader: {
        display: "flex",
        flexDirection: "column",
        justifyContent: Platform.select({
            android: 'center',
            ios: 'center'
        }),
        alignItems: 'center',
        width: "100%",
        height: Platform.select({
            android: 56,
            ios: 90,
        }),
        backgroundColor: "#1A2857",
        paddingTop: Platform.select({
            ios: 30,
        })
    },
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
    }

})
