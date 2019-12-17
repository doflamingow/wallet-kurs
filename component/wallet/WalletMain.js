import React, { Component } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { Appbar, 
  Divider, 
  TextInput} from 'react-native-paper';
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
    ListItem,
    Tabs,
    Tab
  } from "native-base";
import TabOne from "./WalletView";
import TabTwo from "./WalletViewAcc";



export default class WalletMain extends Component <Props>{
  constructor(props) {
    super(props);
    this.state = {
      stateName: [],
      data:[]
    };
  }
  static navigationOptions = {
    title: 'Wallet'
};

  render() {
    return (
      <Container>
      <Tabs>
      <Tab heading="Wallet List">
            <TabOne />
          </Tab>
          <Tab heading="Wallet Account">
            <TabTwo />
          </Tab>

      </Tabs></Container>
    )
  }
}