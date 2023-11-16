import {Text, View} from "react-native";
import * as React from "react";
import ContactInfo from "../../components/ContactInfo";
import UniversalModal from "../../components/UniversalModal";

export default function Settings() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ContactInfo />
        </View>
    );
}