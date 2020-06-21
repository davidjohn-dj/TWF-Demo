import React from 'react';
import { View } from 'react-native'
import { Text, StyleService, useStyleSheet } from '@ui-kitten/components';

export default function ScreenHeader(props) {
    const { title, subtitle } = props;
    const styles = useStyleSheet(themeStyles);
    return (
        <View style={styles.container}>
            {title && typeof title === 'string' ? <Text style={styles.title}>{title}</Text> : title && <View style={styles.title}>{title}</View>}
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
    );
}

const themeStyles = StyleService.create({
    container: {
        fontFamily: "lato-regular",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    title: {
        fontFamily: "lato-bold",
        maxWidth: 300,
        marginBottom: 16,
        paddingTop: 8,
        color: "twf-blue-color",
        fontSize: 26
    },
    subtitle: {
        color: "twf-regular-text-color",
    }
})