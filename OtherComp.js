import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Picker } from 'react-native';
import CallComp from './CallComponent'

export default class OtherComp extends Component<Props> {

  static navigationOptions = {
    header: null,
    title: 'Apps Using React Native'
  };
  constructor(props) {
    super(props);
    this.state = {
      testData: 'udah',
      daerah: []
    };
  }
  editText = (data) => {
    this.setState({ testData: data })
  }



  render() {
    console.log('render')
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Komponen Lain</Text>
        <Text style={styles}>To get started, just start</Text>
        <Text>
          {this.state.testData}
        </Text>
        <CallComp changeText={this.editText} data={this.state.testData} />


        <Picker
          selectedValue={this.state.daerah}
          style={{ height: 50, width: 300 }}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({ daerah: itemValue });
          }
          }>
          {this.props.kota}
        </Picker>

      </View>
    );
  }

  _buttonPress = () => {
    Alert.alert('callback', "yes")
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});