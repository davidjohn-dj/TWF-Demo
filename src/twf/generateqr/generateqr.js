import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
// import all basic components
import QRCode from 'react-native-qrcode-svg';

export default props => {
  
    const [inputValue, setInputValue] = React.useState("");

  
  const setQRInputValue = () => {
    // Function to get the value from input
    // and Setting the value to the QRCode
    setInputValue("ram");
  };
  
  const onSubmitQR = () => {
console.log("pressed ");
  }

    return (
      <View style={styles.MainContainer}>
        <QRCode
          //QR code value
          value={inputValue ? inputValue : 'Ramakrishna'}
          //size of QR Code
          size={250}
          //Color of the QR Code (Optional)
          color="black"
          //Background Color of the QR Code (Optional)
          backgroundColor="transparent"
          //Logo of in the center of QR Code (Optional)
          //logo={{
            //url:
              //'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
          //}}
          //Center Logo size  (Optional)
          logoSize={30}
          //Center Logo margin (Optional)
          logoMargin={2}
          //Center Logo radius (Optional)
          logoBorderRadius={15}
          //Center Logo background (Optional)
          logoBackgroundColor="yellow"
        />
        <TextInput
          // Input to get the value to set on QRCode
          style={styles.TextInputStyle}
          underlineColorAndroid="transparent"
          placeholder="Enter text to Generate QR Code"
        />
        <TouchableOpacity
          onPress={onSubmitQR()}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.TextStyle}> Generate QR Code </Text>
        </TouchableOpacity>
      </View>
    );
};


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    paddingTop: 40,
  },
  TextInputStyle: {
    width: '100%',
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    paddingTop: 8,
    marginTop: 10,
    paddingBottom: 8,
    backgroundColor: '#F44336',
    marginBottom: 20,
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});