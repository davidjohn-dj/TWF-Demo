import React from 'react';
import { View } from 'react-native'
import { Input, Text, StyleService, useStyleSheet } from '@ui-kitten/components';

export default function FormInput(props) {
    const { label, ...inputProps } = props;
    const themeStyles = useStyleSheet(styles);
    return (
        <View style={themeStyles.inputContainer}>
            {label && <Text>{label}</Text>}
            <Input
                {...inputProps}
            />
            {/* {touched && ((error && <Text>{error}</Text>) || (warning && <Text>{warning}</Text>))} */}
        </View>
    );
}

const styles = StyleService.create({
    inputContainer: {
        // margin: 15
    }
})