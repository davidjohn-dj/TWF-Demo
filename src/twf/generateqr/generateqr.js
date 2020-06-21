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

export default class Home extends React.Component {
  
  constructor(props) {
    super(props);
    this.state =
    {
      base64UserClaims: '',
      base64UserSignature: '',
      status: null
    }
  }

  componentDidMount() {
    let newKeyPair = nacl.sign.keyPair()
    console.log(newKeyPair)

    let userClaims = { "created_at": "2020-05-17T11:49:01-07:00", "device_id": "946103e5-f6e2-46ca-a055-7621d3ef5022", "key_id": "95b820a8-9033-413b-b95d-390cd827acf5", "user_id": "6b57cca0-35b0-4d96-ada1-9db691b19cab" };

    let userClaimsJSON = naclUtil.decodeUTF8(JSON.stringify(userClaims))
    let userSignature = nacl.sign.detached(userClaimsJSON, newKeyPair.secretKey)
    
    let base64UserClaims = naclUtil.encodeBase64(userClaimsJSON)
    let base64UserSignature = naclUtil.encodeBase64(userSignature)
    console.log("Signed claims " + JSON.stringify(userClaims) + " with signature " + base64UserSignature)

    let qrCodePayload = base64UserClaims + "." + base64UserSignature
    console.log("√ Computed signed message: " + qrCodePayload)
    this.setState({
      keyPair: newKeyPair,
      base64UserClaims: base64UserClaims,
      base64UserSignature: base64UserSignature,
      qrCodePayload: qrCodePayload
    })
  }

  scanQrCode = () => {
    const qrCodePayload = this.state.qrCodePayload
    // console.log('signed Message', qrCodePayload)

    //for Success case use below newKeyPair
    let newKeyPair = this.state.keyPair;

    //for Failure case use below newKeyPair
    // let newKeyPair = nacl.sign.keyPair();

    let components = qrCodePayload.split('.')
    let claims = components[0]
    let signature = components[1]

    let success = nacl.sign.detached.verify(naclUtil.decodeBase64(claims), naclUtil.decodeBase64(signature), newKeyPair.publicKey)
    console.log(success)
    if (success) {
      this.setState({
        status: 'Success'
      });
    }
    else {
      this.setState({
        status: 'Failed'
      });
    }
  }


  render(){
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
  }
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