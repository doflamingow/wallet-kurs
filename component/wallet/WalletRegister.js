import React, { Component } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { Appbar, 
  Divider, 
  TextInput,
  Card } from 'react-native-paper';
import { Container, Header, Content, Footer, Left, Body, Right, Text, Icon, Form, Item, Label, Picker, Button } from 'native-base';
import Axios from 'axios';
import {getUserData} from '../../Auth';

export default class WalletRegister extends Component <Props>{
    constructor(props) {
        super(props);
        this.state = {
          stateName: [],
          data:[],
          walletid:[],
          wallet_id:''
        };
      }
      static navigationOptions = {
        title: 'Register Wallet'
    };
    
async componentDidMount() {
  const cif = await getUserData();
  console.log("cif "+cif)
  Axios.get(`http://192.168.1.38:8090/accounts/${cif}`)
  .then((results) => {
    const response = results.data
    this.setState({data:response.data})
    console.log(JSON.stringify(response));
  }).catch(error => {
    alert(error);
  })

  Axios.get(`http://192.168.1.38:8090/customer/${cif}/wallets`)
  .then((results) => {
    const response = results.data
    this.setState({walletid:response.data})
    console.log(JSON.stringify(response));
  }).catch(error => {
    alert(error);
  })

}
_registerWallet = async() => {
  
  const data = {
    walletId : {
      walletId:this.state.wallet_id},
    accountNumber: {
      accountNumber:this.state.stateName}
  }
  console.log(data);
  Axios.post("http://104.248.147.193:4301/api/walletaccount", data)
  .then(async(result) => {
    const response = result.data
    console.log(data);
    console.log(JSON.stringify(response));
    if(response.response_code == "20") {
        console.log("dapet");
    } else {
      Alert.alert(response.message);
    }
  }).catch(error => {
    alert(error);
  })

}

render() {
  console.log('render');
  console.log(this.state);

//   if (this.state.data) {
//     console.log("Ada")
//     return (
//       <View><Text>A</Text></View>
//     )
// } else {
//   console.log("Ga Ada")
//   return(
//     <View><Text>b</Text></View>
  
//   )
// }

    return (
      <Container>
        <Content>
        <Form style={{ marginRight: 15 }}>
                        <Item>
                            <Label>Select Account Number</Label>
                            <Picker
                                note
                                mode="dropdown"
                                style={{ width: 120 }}
                                selectedValue={this.state.stateName}
                                onValueChange={(value) => {
                                    this.setState({ stateName: value });
                                }}
                            >
                                <Picker.Item label="Choose"/>
                                {this.state.data.map(
                                    (data, key) => <Picker.Item label={data.accountNumber} value={data.accountNumber} key={key} />)}
                            </Picker>
                        </Item>

                        <Item>
                            <Label>Select Wallet Id</Label>
                            <Picker
                                note
                                mode="dropdown"
                                style={{ width: 120 }}
                                selectedValue={this.state.wallet_id}
                                onValueChange={(value) => {
                                    this.setState({ wallet_id: value });
                                }}
                            >
                                <Picker.Item label="Choose"/>
                                {this.state.walletid.map(
                                    (data, key) => <Picker.Item label={data.walletId} value={data.walletId} key={key} />)}
                            </Picker>
                        </Item>

                        <Item>
                        <Button block success
                          style={styles.btnByRegister}
                          onPress={this._registerWallet}>
            <Text>Register</Text>
          </Button>
                        </Item>

        </Form>
        </Content>
      </Container>
      
    )
  }
}

const styles = StyleSheet.create({
  btnByRegister: {
    width:180,
    backgroundColor:'#3dd130',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
})