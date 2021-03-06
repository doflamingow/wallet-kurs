import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, Alert } from 'react-native';
import { Appbar, 
  Divider, 
  TextInput, 
  Button, 
  Card } from 'react-native-paper';
import Axios from 'axios';

export default class WalletCreate extends Component <Props>{
    constructor(props) {
        super(props);
        this.state = {
            stateWallet: []
          };
        }
      static navigationOptions = {
        title: 'Create Wallet'
    };

    _addAcc = async() => {
  
        const data = {
          description : this.state.stateWallet,
          customerNumber:{
            customerNumber:this.props.navigation.state.params.cif
      }

         
        }
        Axios.post("http://104.248.147.193:4301/api/wallet", data)
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
        return (
          <View style={styles.container}>
            <Card style={{
              backgroundColor: '#F5FCFF'}}>
                    <Card.Content>
                      <TextInput autoFocus={true} mode='outlined' 
                      value={this.state.stateWallet} 
                      onChangeText={(description) => this.setState({ stateWallet: description })} 
                      label='Your Wallet' />
                      <Divider />

                    </Card.Content>
                    <Card.Actions>
                      <Button mode='contained' onPress={this._addAcc}>Add Account</Button>
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
