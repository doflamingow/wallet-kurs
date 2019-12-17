import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, Alert } from 'react-native';
import { Appbar, 
  Divider, 
  TextInput, 
  Button, 
  Card } from 'react-native-paper';
import Axios from 'axios';

export default class Transfer extends Component <Props>{
  constructor(props) {
    super(props)
    this.state = {
      stateAccountNumber: '',
      stateDestination: '',
      stateAmount:'',
      stateDescription:''
    }
  }
  static navigationOptions = {
    title: 'Transfer'
};
_transfer = async() => {
  if(
    !this.state.stateAccountNumber &&
    !this.state.stateAmount &&
    !this.state.stateDestination &&
    !this.state.stateDescription) 
    { alert('Please Fill Form Correctly');
  } else{
    const data = {
      accountNumberDebit : this.state.stateAccountNumber,
      accountNumberCredit : this.state.stateDestination,
      amount : this.state.stateAmount,
      desc : this.state.stateDescription
    }
    Axios.post("http://104.248.147.193:4301/api/transaction/transfer", data)
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
}

    render() {
        return (
          <View style={styles.container}>
            <Card style={{
              backgroundColor: '#F5FCFF'}}>
                    <Card.Content>
                      <TextInput autoFocus={true} mode='outlined' 
                      value={this.state.stateAccountNumber} 
                      onChangeText={(accountNumberDebit) => this.setState({ stateAccountNumber: accountNumberDebit })} 
                      label='Account Number' />
                      <Divider />

                      <TextInput autoFocus={true} mode='outlined' 
                      value={this.state.stateDestination} 
                      onChangeText={(accountNumberCredit) => this.setState({ stateDestination: accountNumberCredit })}
                      label='Destination' />
                      <Divider />

                      <TextInput autoFocus={true} mode='outlined' 
                      value={this.state.stateAmount} 
                      onChangeText={(amount) => this.setState({ stateAmount: amount })}
                      keyboardType='numeric'
                      label='Amount' />
                      <Divider />

                      <TextInput autoFocus={true} mode='outlined' 
                      value={this.state.stateDescription} 
                      onChangeText={(desc) => this.setState({ stateDescription: desc })}
                      label='Description' />
                      <Divider />

                    </Card.Content>
                    <Card.Actions>
                      <Button mode='contained' onPress={this._transfer}>Transfer</Button>
                    </Card.Actions>
                    
                  </Card>
    
        
          </View>
        )
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems:'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
