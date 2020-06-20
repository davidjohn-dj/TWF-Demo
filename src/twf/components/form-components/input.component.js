import React from 'react';
import { View } from 'react-native'
import { Input, CheckBox, Text, StyleService, useStyleSheet } from '@ui-kitten/components';

export default function FormInput(props) {
    const { label, checkbox, ...inputProps } = props;
    const themeStyles = useStyleSheet(styles);
    return (
        <View style={themeStyles.inputContainer}>
            {label && <Text>{label}</Text>}
            {!checkbox && <Input {...inputProps} />}
            {checkbox && <CheckBox type="checkbox" {...inputProps} />}
            {/* {touched && ((error && <Text>{error}</Text>) || (warning && <Text>{warning}</Text>))} */}
        </View>
    );
}

const styles = StyleService.create({
    inputContainer: {
        // margin: 15
    }
})