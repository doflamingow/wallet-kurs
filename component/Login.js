/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert} from 'react-native';
import { Container, Header, Content, Button, Body,Left,Right} from 'native-base';
import {signIn} from '../Auth';
import Axios from 'axios';


export default class Login extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            stateEmail:'',
            statePassword:''
        };
    }
    static navigationOptions = {
        title: 'LOGIN',
    };

    static navigationOptions = { header: null }

    _loginApi = async() => {
      if(
        !this.state.stateEmail&&
        !this.state.statePassword){
          alert(
              'Fill Form Correctly'
          );
      } else {
    const data = {
      email: this.state.stateEmail,
      password: this.state.statePassword
    }
    // this.props.navigation.navigate("Main")
    Axios.post("http://104.248.147.193:4301/api/customer/login", data)
    .then(async(result) => {
        const response = result.data
        console.log(data);
        console.log(JSON.stringify(response));
        if(response.status == "20") {
            console.log("dapet");
          const login = await signIn(response.data.customerNumber, this.state.statePassword);
          if(login) {
            this.props.navigation.navigate('Main');
          } else {
            alert("Username or password is invalid");            
          }
        } else {
          Alert.alert(response.message);
        }
      }).catch(error => {
        alert(error);
      })
    }
  }
    render() {
      let pic = require( '../assets/dompetku.png')
        return (
           
          <View style={styles.container}>
          <Image source={pic} style={{width: 250, height: 250 }} />
          <Text style={styles.textByUp}>Login</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Email"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({ stateEmail: email })} value={this.state.stateEmail} />
            <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/ios/50/000000/new-post.png'}}/>
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(password) => this.setState({statePassword : password})} value={this.state.statePassword}/>
            <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/40/000000/password.png'}}/>
          </View>

          <View>
          <Button block success
          style={styles.btnByRegister}
            onPress={this._loginApi}
          >
            <Text style={{fontSize: 16, fontWeight:'bold', color: 'black'}}>Login</Text>
          </Button>
          
        </View>

        <View>
        <Text style={styles.textByRegister}>Or</Text>
        </View>

        <View>
        <Button block success
        style={styles.btnByRegister}
        onPress={()=>{this.props.navigation.navigate('Register')}}
        >
          <Text style={{fontSize: 16, fontWeight:'bold', color: 'black'}}>Register</Text>
        </Button>
        
      </View>

        </View>
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
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#dee3ea',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginRight:15,
    justifyContent: 'center'
  },
  btnByRegister: {
    width:180,
    backgroundColor:'#3dd130',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  loginText: {
    color: 'white',
  },
  bgImage:{
    flex: 1,
    resizeMode:'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText:{
    color:"white",
    fontWeight:'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  textByRegister:{
    color:"#011838",
    fontWeight:'bold'
  },
  textByUp:{
    color:"#011838",
    fontWeight:'bold',
    textAlign:'center',
    fontSize: 25,

    textShadowColor: 'rgba(0, 0, 0, 0)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  }
}); 