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

import {Checkbox, Appbar } from 'react-native-paper';
import {getUserData} from '../../Auth';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import History from './History';

export default class TransactionList extends Component <Props>{
  constructor() {
    super();
    this.state = {
      data: [],
      message: '',
    }
  }
    static navigationOptions = {
    title: 'Transaction History'
};
async componentDidMount() {
  const accountNumber = this.props.navigation.state.params;
  console.log(accountNumber)
  axios.get(`http://104.248.147.193:4301/api/transactions/${accountNumber}`)
  .then((results) => {
    const response = results.data
    this.setState({data:response.data})
    console.log(JSON.stringify(response.data));
  }).catch(error => {
    alert(error);
  })

}



    render() {
        return (
          <Container>
            <Content padder style={{ backgroundColor: "white" }}>
            <List>
            {this.state.data.map((data, key) => 
              <History key={key} data={data}/>)}
        </List>
          
          </Content>
          </Container>
        )
      }
}