import React from 'react'
import { View } from 'react-native'
import { Text, StyleService, useStyleSheet } from '@ui-kitten/components';

const ErrorMessage = ({ errorValue }) => {
    const themeStyles = useStyleSheet(styles);
    return errorValue ? <View style={themeStyles.container}>
        <Text style={themeStyles.errorText}>{errorValue}</Text>
    </View> : null
}

const styles = StyleService.create({
    container: {
        marginLeft: 17
    },
    errorText: {
        color: '#F81300'
    }
})

export default ErrorMessage