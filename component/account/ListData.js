import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right,
  List,
  ListItem,
  Tabs,
  Tab,
  Accordion,
  Picker
} from "native-base";

import { StyleSheet, TextInput, View, Image, TouchableOpacity, Alert} from 'react-native';
import { Checkbox, Appbar } from 'react-native-paper';
import {getUserData} from '../../Auth';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export default class ListData extends Component <Props>{
  constructor() {
    super();
    this.state = {
      data: [],
      amount:null,
      message: '',
    }
  }
    static navigationOptions = {
    title: 'List Account'
};
async componentDidMount() {
  const cif = await getUserData();
  console.log("cif "+cif)
  axios.get(`http://104.248.147.193:4301/api/accounts/${cif}`)
  .then((results) => {
    const response = results.data
    this.setState({data:response.data})
  }).catch(error => {
    alert(error);
  })
  axios.get(`http://104.248.147.193:4301/api/tradings/${cif}/balance`)
  .then((results) => {
    console.log(results.data.data)
    const response = results.data
    this.setState({amount:results.data.data})
  }).catch(error => {
    alert(error);
  })
}

_amount(){
  if (this.state.amount){
    
  return(<Text note>${this.state.amount}</Text>)
  }
}

    render() {
      let dataArray = []
      let data = this.state.data;

      if (this.state.amount){
        return (
          <ListItem>
              <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('DetailAccount', this.props.data);
              }}>
                  <View style={{ flex: 1, flexDirection: "column" }}>
                      <Text>{this.props.data.accountNumber}</Text>
                      <Text note >Rp {this.props.data.balance}</Text>

                      <Text note>$ {this.state.amount}</Text>
                  </View>
              </TouchableOpacity>
              <Body></Body>
          </ListItem> 
      )
        }return(
          <ListItem>
              <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('DetailAccount', this.props.data);
              }}>
                  <View style={{ flex: 1, flexDirection: "column" }}>
                      <Text>{this.props.data.accountNumber}</Text>
                      <Text note >Rp {this.props.data.balance}</Text>

                      <Text note>$ {this.state.amount}</Text>
                  </View>
              </TouchableOpacity>
              <Body></Body>
          </ListItem> 
        )
        
        
      }
}


const resizeMode = 'center';

const styles = StyleSheet.create({
  
  btnByRegister: {
    width:240,
    backgroundColor:'#3dd130',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  }
}); 