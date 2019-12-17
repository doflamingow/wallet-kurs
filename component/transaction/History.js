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

import { StyleSheet, TextInput, View, Image, TouchableOpacity, Alert, ScrollView} from 'react-native';
import { Checkbox, Appbar } from 'react-native-paper';
import {getUserData} from '../../Auth';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export default class History extends Component <Props>{
  constructor() {
    super();
    this.state = {
      data: [],
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
    // alert(JSON.stringify(results.data.response_code))
    const response = results.data
    this.setState({data:response.data})
    console.log(JSON.stringify(response));
    // if(response.response_code == "20") {
    //     console.log("dapet");
    // } else {
    //   alert(response.message);
    // }
  }).catch(error => {
    alert(error);
  })

}



    render() {
      let dataArray = []
      let data = this.state.data;
      // for(let i = 0; i < data.length; i++){
      //   dataArray.push({
      //     // title: data[i].customerNumber.firstName,
      //     title:"Your Account",
      //     content: 
      //       "Account Number : "+data[i].accountNumber
      //       +"\nCustomer Number : "+data[i].customerNumber.customerNumber
      //       +"\nNIK : "+data[i].customerNumber.nik
      //       +"\nFirst Name : "+data[i].customerNumber.firstName
      //       +"\nLast Name : "+data[i].customerNumber.lastName
      //       +"\nBirth Date : "+data[i].customerNumber.birthDate
      //       +"\nAmount : Rp. "+data[i].balance
      //   },)
      // }
  
        return (
            <ScrollView>
            <ListItem>
            <Left>
            <View style={{flex: 1, flexDirection: "column"}}>
                      <Text>Date : {this.props.data.date.slice(0,10)}</Text>
                        <Text>Description : {this.props.data.transactionType.description}</Text>
                                <Text>Account Credit : {this.props.data.accountNumberCredit}</Text>
                                <Text>Accout Debit : {this.props.data.accountNumberDebit}</Text>
                           
                            <Text>Amount : Rp.{this.props.data.amount}</Text> 
                            </View>  
                            </Left>   
            </ListItem>
            </ScrollView>
          
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