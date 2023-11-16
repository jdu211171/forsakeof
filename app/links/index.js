import * as React from "react";
import {StyleSheet, Text, View} from "react-native";
import {ExternalLink} from "../../components/ExternalLink";
import Colors from "../../constants/Colors";

export default function Links() {
    return (
        <View style={styles.container}>
            <ExternalLink
                style={styles.helpLink}
                href="https://jdu.uz/">
                <Text style={[styles.helpLinkText, styles.link]} lightColor={Colors.light.tint}>
                    Japan Digital University websayti
                </Text>
            </ExternalLink>
            <ExternalLink
                style={styles.helpLink}
                href="https://www.youtube.com/@JapanDigitalUniversity">
                <Text style={[styles.helpLinkText, styles.link]} lightColor={Colors.light.tint}>
                    Japan Digital University YouTube sahifasi
                </Text>
            </ExternalLink>
            <ExternalLink
                style={styles.helpLink}
                href="https://www.instagram.com/jdu.uz/">
                <Text style={[styles.helpLinkText, styles.link]} lightColor={Colors.light.tint}>
                    Japan Digital University Instagram sahifasi
                </Text>
            </ExternalLink>
            <ExternalLink
                style={styles.helpLink}
                href="https://www.facebook.com/jdu.uz/">
                <Text style={[styles.helpLinkText, styles.link]} lightColor={Colors.light.tint}>
                    Japan Digital University Facebook sahifasi
                </Text>
            </ExternalLink>
            <ExternalLink
                style={styles.helpLink}
                href="https://t.me/jduniversity_uz">
                <Text style={[styles.helpLinkText, styles.link]} lightColor={Colors.light.tint}>
                    Japan Digital University Telegram kanali
                </Text>
            </ExternalLink>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'star',
        paddingTop: 20,
        paddingLeft: 20
    },
    link: {
        textDecorationLine: 'underline',
        color: '#1560BD',
        fontWeight: 'bold',
        fontSize: 16,
    },
    helpContainer: {
        marginTop: 15,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        textAlign: 'center',
    },
});