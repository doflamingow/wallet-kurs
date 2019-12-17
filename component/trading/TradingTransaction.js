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
        title: 'Trading'
    };
    async componentWillMount() {
      this.cif = await getUserData();
      console.log(this.cif)
    }    

    // async componentDidMount() {
    // axios.get("http://192.168.1.38:8090/exchanges")
    //   .then((results) => {
    //     const response = results.data
    //     this.setState({data:response.data})
    //     console.log(JSON.stringify(response));
    //   }).catch(error => {
    //     alert(error);
    //   })
    
    // }

    cif
    _registerApis= async() => {
      if(
        !this.state.stateAmount &&
        !this.state.stateBS ){
            alert(
                'Please fill form correctly'
            );
        } else {

    const data = {
      type : this.state.stateBS,
      amount: this.state.stateAmount,
      tradingId: this.cif
    } 

    console.log(data)

    axios.post("http://104.248.147.193:4301/api/trading", data)
    .then(async(result) => {
        const response = result.data
        if(response.response_code == "20") {
          console.log("dapet")
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
          
          <ScrollView>
          
          <Text style={styles.textByUp}>Transaction</Text>
          <View style={styles.container}>
          <View style={styles.inputContainer}>
          <Text>Your Amount</Text>
            <TextInput style={styles.inputs}
                placeholder="USD"
                underlineColorAndroid='transparent'
                keyboardType='numeric'
                onChangeText={(amount) => this.setState({ stateAmount: amount })} value={this.state.amount} />
          </View>

          <View>
          <Text>Type</Text>
          <Picker
            selectedValue={this.state.stateBS}
            style={styles.inputGender}
            onValueChange={(itemValue, itemIndex) =>
            this.setState({stateBS : itemValue})
          }
          >
          <Picker.Item label="Select" />
          <Picker.Item label="Buy" value="b" />
          <Picker.Item label="Sell" value="s" />
        </Picker>
          </View>

          <View>
          <Button block success
          style={styles.btnByRegister}
            onPress={this._registerApis}
          >
            <Text style={{fontSize: 16, fontWeight:'bold', color: 'black'}}>Submit</Text>
          </Button>
          
          </View>  
        </View>
        </ScrollView>
      );
    }
    
_auth = async ()=>{
    const { stateUsername, statePassword } = this.state;
    if (stateUsername != statePassword) {
        alert('invalid username or password');
    }else{
        const login = await signIn(stateUsername, statePassword);
        if (login) {
            this.props.navigation.navigate('Main');
            alert('login succes');
        }else{
            alert('login failed');
        }
    }

}

}


const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#dee3ea',
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',
  },
  inputGender: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#dee3ea',
    borderRadius:30,
    borderBottomWidth: 1,
    height:45,
    width:300,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'flex-start',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btnByRegister: {
    width:180,
    backgroundColor:'#3dd130',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  textByUp:{
    color:"#011838",
    fontWeight:'bold',
    textAlign:'center',
    fontSize: 25,

    textShadowColor: 'rgba(0, 0, 0, 0)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
}); 