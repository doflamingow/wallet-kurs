/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform,
   StyleSheet,
   TextInput, 
   View, 
   Alert, 
   Image,
   Picker,
  ScrollView,
  TouchableOpacity } from 'react-native';
import {Button, Text} from 'native-base';
import axios from 'axios';
import DatePicker from 'react-native-datepicker';
import {getUserData} from '../../Auth';

export default class TradingTransaction extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            stateAmount:'',
            stateBS:'',
            stateRI:''
        };
    }
    static navigationOptions = {
        title: 'Outstanding'
    };
    async componentWillMount() {
      this.cif = await getUserData();
      console.log(this.cif)
    }    

   
    render() {
        return (
          
          <ScrollView>
          
          
        </ScrollView>
      );
    }

}


const resizeMode = 'center';

const styles = StyleSheet.create({
  
}); 