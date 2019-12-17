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
import Axios from 'axios';
import DatePicker from 'react-native-datepicker';

export default class Register extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            stateEmail:'',
            statePassword:'',
            stateFirstname:'',
            stateLastname:'',
            stateNIK:'',
            stateMom:'',
            stateBirthdate:'',
            stateGender:''
        };
    }


    _registerApi= async() => {

      if(
        !this.state.stateEmail&&
        !this.state.statePassword&&
        !this.state.stateFirstname&&
        !this.state.stateLastname&&
        !this.state.stateNIK&&
        !this.state.stateMom&&
        !this.state.stateBirthdate&&
        !this.state.stateGender ){
            alert(
                'Please fill form correctly'
            );
        } else {

    const data = {
      nik : this.state.stateNIK,
      email: this.state.stateEmail,
      password: this.state.statePassword,
      firstName : this.state.stateFirstname,
      lastName : this.state.stateLastname,
      motherName : this.state.stateMom,
      birthDate : this.state.stateBirthdate,
      gender : this.state.stateGender
    } 
    Axios.post("http://104.248.147.193:4301/api/customer", data)
    .then(async(result) => {
        const response = result.data
        if(response.response_code == "20") {
          this.props.navigation.goBack()
          this.props.navigation.navigate("Login")
        } else {
          Alert.alert(response.message);
          this.props.navigation.goBack()
          this.props.navigation.navigate("Login")
        }
      }).catch(error => {
        alert(error);
      })
  }
}
    render() {
        return (
          
          <ScrollView>
          <View style={styles.container}>

          <Text style={styles.textByUp}>Sign Up</Text>

            <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="NIK"
                underlineColorAndroid='transparent'
                onChangeText={(nik) => this.setState({ stateNIK: nik })} 
                value={this.state.stateNIK}
                keyboardType='numeric' />
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="First Name"
                underlineColorAndroid='transparent'
                onChangeText={(firstName) => this.setState({ stateFirstname: firstName })} 
                value={this.state.stateFirstname} />
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Last Name"
                underlineColorAndroid='transparent'
                onChangeText={(lastName) => this.setState({ stateLastname: lastName })} value={this.state.stateLastname} />
          </View>

          <View>
          <Text>Gender</Text>
          <Picker
            selectedValue={this.state.stateGender}
            style={styles.inputGender}
            onValueChange={(itemValue, itemIndex) =>
            this.setState({stateGender : itemValue})
          }
          >
          <Picker.Item label="Select" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
        </Picker>
          </View>

          <View style={styles.inputContainer}>
                    <DatePicker
                        mode="date"
                        date={this.state.stateBirthdate}
                        placeholder="Birth Date"
                    
                        format="YYYY-MM-DD"
                        minDate="1910-01-01"
                        maxDate="2020-01-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0,
                                
                            },
                            dateInput: {
                                marginRight: 68,
                                borderWidth: 0,                      
                            },
                        }}
                        onDateChange={(birth) => this.setState({ stateBirthdate: birth }) }
                 
                    />
                </View>

          <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Mother Name"
              underlineColorAndroid='transparent'
              onChangeText={(motherName) => this.setState({ stateMom: motherName })} value={this.state.stateMom} />
        </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Email"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({ stateEmail: email })} value={this.state.stateEmail} />
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(pass) => this.setState({statePassword : pass})} value={this.state.statePassword}/>
          </View>

          <View>
          <Button block success
          style={styles.btnByRegister}
            onPress={this._registerApi}
          >
            <Text style={{fontSize: 16, fontWeight:'bold', color: 'black'}}>Register</Text>
          </Button>
          
          </View>

          <View>
        <Text style={styles.textByRegister}>Already Have an Account, Please </Text>
				 <TouchableOpacity onPress={() =>  this.props.navigation.navigate("Login")}><Text style={styles.textByRegister}> Login</Text></TouchableOpacity>
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
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:300,
    borderRadius:30,
    backgroundColor:'transparent'
  },
  btnByRegister: {
    width:180,
    backgroundColor:'#3dd130',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  loginButton: {
    backgroundColor: "#00b5ec",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
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
  textByUp:{
    color:"#011838",
    fontWeight:'bold',
    textAlign:'center',
    fontSize: 25,

    textShadowColor: 'rgba(0, 0, 0, 0)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  textByRegister:{
    color:"#011838",
    fontWeight:'bold',
    textAlign:'center',

    textShadowColor: 'rgba(0, 0, 0, 0)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
}); 