import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Alert,Picker} from 'react-native';
import {TextInput } from 'react-native';
import CallComp from './CallComponent';
import Other from './OtherComp.js';

export default class NewComp extends Component<Props> {
    static navigationOptions = {
        title : 'Apps Using React Native',
        header : null
    };
    constructor(props){
        super(props);
        this.state ={
          testData:'Test Data',
          prov:[],
          city:[],
          daerah:[]
      
        };
      }

      dki = [
      <Picker.Item label="Jaksel" value="jaksel"/>,
      <Picker.Item label="Jakpus" value="jakpus"/>,
      <Picker.Item label="Jaktim" value="jaktim"/>];

      jabar = [
      <Picker.Item label="Bogor" value="bogor"/>,
      <Picker.Item label="Bandung" value="bandung"/>,
      <Picker.Item label="Depok" value="depok"/>];

      jateng = [
      <Picker.Item label="Semarang" value="semarang"/>,
      <Picker.Item label="Solo" value="solo"/>,
      <Picker.Item label="Cilacap" value="cilacap"/>];

      diy = [
      <Picker.Item label="Yogya" value="yogya"/>,
      <Picker.Item label="Bantul" value="bantul"/>,
      <Picker.Item label="Sleman" value="sleman"/>];


        componentWillMount()
        {
        console.log('componentWillMount')
        } 
        componentDidMount()
        {
        console.log('componentDidMount')
        }
        componentWillUpdate(nextProps, nextState){
          console.log(`componentWillUpdate: props = ${JSON.stringify(nextProps)} state = ${JSON.stringify(nextState)}`)
        console.log('componentWillUpdate')
        }
        componentDidUpdate(prevProps, prevState){
          console.log(`componentWillUpdate: props = ${JSON.stringify(prevProps)} state = ${JSON.stringify(prevState)}`)
        console.log('componentDidUpdate')
       }

      

      render() {
        console.log('render');
          return (
            <View style={styles.container}>
            <Button
            onPress={() => this.props.navigation.navigate('Other')}
            title="Pencet"
          >  Press Me
          </Button>

            <Picker
            selectedValue={this.state.daerah}
            style={{height: 50, width: 300}}
            onValueChange={(itemValue, itemIndex) =>{
              this.setState({daerah: itemValue});
              this.itemValue(itemValue)
            }
            }>
            <Picker.Item label="--Pilih--" value="" />
            <Picker.Item label="DKI Jakarta" value="dki" />
            <Picker.Item label="Jawa Barat" value="jabar" />
            <Picker.Item label="Jawa Tengah" value="jateng" />
            <Picker.Item label="DIY" value="diy" />
          </Picker>

          <Other kota={this.state.city}></Other>
                    </View>
 
          );
        
        }

itemValue =(prov)=> {
  if (prov == 'dki'){
    this.setState({city: this.dki})
  }
  else if (prov == 'jabar'){
    this.setState({city: this.jabar})
  }
  else if (prov == 'jateng'){
    this.setState({city: this.jateng})
  }
  else if (prov == 'diy'){
    this.setState({city: this.yogya})
  }

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