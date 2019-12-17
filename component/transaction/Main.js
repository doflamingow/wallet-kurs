import React, { Component } from 'react';
import { View, 
  Stylesheet, 
  Image, 
  Button, 
  Text,
ScrollView } from 'react-native';
import { List, Checkbox, Appbar } from 'react-native-paper';

import {signOut,getUserData} from '../../Auth';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

type Props={};

export default class Main extends Component <Props>{
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
 
  static navigationOptions = {
    title:'Main Menu',
  }
  cif
 async componentWillMount(){
  const abc = await getUserData();
    AsyncStorage.getItem('uname',(err,res)=>{
this.cif=res;
    })
    axios.get(`http://104.248.147.193:4301/api/customer/${abc}`)
  .then((results) => {
    const response = results.data
    this.setState({data:response.data})
  }).catch(error => {
    alert(error);
  })
  }

  _logout = async() => {
    await AsyncStorage.clear()
    username = await AsyncStorage.getItem('uname')
    alert("Thank You")
    this.props.navigation.navigate('Login')
  }
  render() {
    return (
      <ScrollView>
      <View>
        <Appbar.Header>
          <Appbar.Content
          title="Menu"/>
          <Text style={{fontSize:16, color:'white'}}>Hello {this.state.data.firstName}</Text>
          <Appbar.Action icon='exit-to-app'  onPress={this._logout} 
          subtitle="Exit"/>
        </Appbar.Header>
        <List.Section title="Account">
        <List.Accordion
          title="Account"
          left={props => <List.Icon {...props} icon="person" />}
        >
          <List.Item title='Add Account' onPress={()=> this.props.navigation.navigate('addAcc',{cif:this.cif})}></List.Item>
          <List.Item title='List Account' onPress={()=>{this.props.navigation.navigate('listAcc')}}/>
        </List.Accordion>
        </List.Section>

        <List.Section title="Transaction">
        <List.Accordion
          title="Transaction"
          left={props => <List.Icon {...props} icon="monetization-on" />}
        >
          <List.Item title='Transfer' onPress={()=> this.props.navigation.navigate('transfer')}></List.Item>
          <List.Item title='Top Up' onPress={()=>{this.props.navigation.navigate('topup')}}/>
        </List.Accordion>
        </List.Section>

        <List.Section title="Wallet">
        <List.Accordion
          title="Wallet"
          left={props => <List.Icon {...props} icon="account-balance-wallet" />}
        >
          <List.Item title='Create' onPress={()=> this.props.navigation.navigate('walletcreate',{cif:this.cif})}></List.Item>
          <List.Item title='Register' onPress={()=>{this.props.navigation.navigate('walletregis')}}/>
          <List.Item title='Wallet List' onPress={()=>{this.props.navigation.navigate('walletmain')}}/>
        </List.Accordion>
        </List.Section>

        
      </View>
      </ScrollView>
    )
  }
}