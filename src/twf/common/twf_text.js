import React from 'react';
import { View } from 'react-native'
import { Input, Text, StyleService, useStyleSheet } from '@ui-kitten/components';

export default function TwfText(props) {
    const { title, subtitle, ...inputProps } = props;
    const themeStyles = useStyleSheet(styles);
    return (
        <View style={styles.container}>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
    );
}

const styles = StyleService.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    subtitle: {
        margin: 16,
        color: "#1C1C1C",
    }
})