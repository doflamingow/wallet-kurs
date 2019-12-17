import React, { Component } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { Appbar, 
  Divider, 
  TextInput} from 'react-native-paper';
  import {
    Container,
    Accordion,
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
    ListItem,
    Tabs,
    Tab
  } from "native-base";
import {getUserData} from '../../Auth';
import Axios from 'axios'

export default class WalletView extends Component <Props>{
  constructor(props) {
    super();
    this.state = {
      data: [],
      message: '',
    };
  }
  static navigationOptions = {
    title: 'Wallet List'
};

async componentDidMount() {
    const cif = await getUserData();
    console.log("cif "+cif)
    Axios.get(`http://104.248.147.193:4301/api/customer/${cif}/wallets`)
    .then((results) => {
      const response = results.data
      this.setState({data:response.data})
      console.log(JSON.stringify(response));
    }).catch(error => {
      alert(error);
    })
}

  render() {
    let dataArray = []
    let data = this.state.data;
    for(let i = 0; i < data.length; i++){
      dataArray.push({
        title: "Wallet = "+data[i].description,
        content: 
          "Wallet ID : "+data[i].walletId
          +"\nWallet Name : "+data[i].description
          +"\nCreated Date : "+data[i].createdDate.slice(0,10)
        },)
    }
    return (
      <Container>
      <Accordion
            dataArray={dataArray}
            animation={true}
            expanded={true}
            icon="add"
            expandedIcon="remove"
          />

      </Container>
    )
  }
}