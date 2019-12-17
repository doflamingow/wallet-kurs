import React, { Component } from "react";
import { View, StyleSheet, Image, ScrollView, Dimensions} from 'react-native';
import { List, Checkbox, Appbar } from 'react-native-paper';
import { Container, Header,Title, Content,Button, Card, CardItem, Text, Body, Left, Right, Spinner } from 'native-base';
import PureChart from 'react-native-pure-chart';
import Axios from 'axios';

export default class TradingView extends Component <Props>{
  constructor() {
    super();
    this.state = {
      data: [],
      hasil: [],
      message: '',
    }
  }
  static navigationOptions = {
    title: 'Trading'
};

  async componentDidMount() { 
    Axios.get(`http://104.248.147.193:4301/api/exchanges`)
    .then((results) => {
      const response = results.data
      this.setState({data:response.data})
    }).catch(error => {
      alert(error);
    })
  }


  _dataBuy(){
    let newDate = '';
    let dataBuy = [];
    console.log(this.state.data)
    for(let i =0; i < this.state.data.length; i++){
      newDate = this.state.data[i].date.slice(0,10);
      dataBuy.push({x : newDate, y: this.state.data[i].buy })
      console.log(`databuy[${i}] ${JSON.stringify(dataBuy[i])}`)
    }
    console.log('hasil');
    console.log(JSON.stringify(dataBuy));
    return dataBuy;
  }

  _dataSell(){
    let newDate = '';
    let dataSell = [];
    for(let i =0; i < this.state.data.length; i++){
      newDate = this.state.data[i].date.slice(0,10);
      dataSell.push({x : newDate, y: this.state.data[i].sell })
    }
    return dataSell;
  }
render() {

  let data = this.state.data;
  for (let i = 0; i< data.length; i++){
    if (i == data.length - 1){
      // this.setState({hasil: data})
      console.log('looping'+JSON.stringify(data[i]))
      console.log('state'+JSON.stringify(this.state.hasil))
    }
  }

  console.log('state'+JSON.stringify(this.state.hasil))
  let sampleData =
        [
          {
            seriesName: 'Buy',
            data:  this._dataBuy(),
            color: 'red'
          },
          {
            seriesName: 'Sell',
            data: this._dataSell(),
            color: 'green'
          }
        ]

        if(this.state.data.length > 0){
          return (
          <Container>
          
            <Appbar.Header>
                <Appbar.Content title="Trading" 
                subtitle=" "/>
            </Appbar.Header>
            <Content>
        <Text style={{fontSize:16, fontWeight:'bold'}}>    Exchange Chart</Text>

        <PureChart data={sampleData} type='line' />
            <Button block success
                style={styles.btnByRegister}
                onPress={()=>{this.props.navigation.navigate('tradingtrans')}}
                >
                  <Text>Trading Transaction</Text>
                </Button>
                </Content>
            </Container>
          )
        } else {
          return(
            <Container>
        <Header />
        <Content>
          <Spinner color='red' />
        </Content>
      </Container>
          )
        }
    
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
btnByRegister: {
  width:200,
  backgroundColor:'#3dd130',
   borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
},
title:{
  fontSize:30,
  color:'white',
  fontWeight:'bold'
}
})