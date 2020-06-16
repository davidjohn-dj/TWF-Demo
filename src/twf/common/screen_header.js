import React from 'react';
import { View } from 'react-native'
import { Input, Text, StyleService, useStyleSheet } from '@ui-kitten/components';

export default function ScreenHeader(props) {
    const { title, subtitle, ...inputProps } = props;
    const themeStyles = useStyleSheet(styles);
    return (
        <View style={styles.container}>
            {title && <Text style={styles.title}>{title}</Text>}
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}

            {/* {touched && ((error && <Text>{error}</Text>) || (warning && <Text>{warning}</Text>))} */}
        </View>
    );
}

const styles = StyleService.create({
    container: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
      },
    title: {
        margin: 16,
        color : "#181461",
        fontSize: 26,
    },
    subtitle: {
        color : "#1C1C1C",
    }
})