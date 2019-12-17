import React, { Component } from 'react';
import { View, Text, Stylesheet, Image, TouchableOpacity } from 'react-native';

header_max_height = 80
header_min_height = 70
profile_image_max_height = 70
profile_image_min_height = 40

export default class header extends Component {
  static navigationOptions = {
    title: 'Header',
    header: null,
    headerTitleStyle: { color: 'white' },
    headerStyle: { backgroundColor: 'blue' },
  }
  render() {
    let pic = {
      uri: 'https://drive.google.com/file/d/1sN6qAwCdS9G0rPvfJL1I-uqKB8EfLAlc/view?usp=drivesdk'
    };
    return (
      <View style={{ flex: 1 }}>
        <View style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: '#808080',
          height: header_max_height
        }}>
        </View>
        
        <TouchableOpacity onPress={openDrawer=()=>{
          this.props.navigation.openDrawer();
      }}><Text style={{fontWeight:'bold', color:'white' ,fontSize: 20, paddingLeft:20, marginTop: 30}}> 
        Menu</Text></TouchableOpacity>
        <View style={{
          height: profile_image_max_height,
          width: profile_image_max_height,
          borderRadius: profile_image_max_height / 2,
          borderColor: 'white',
          overflow: "hidden",
          marginTop: 5,
          marginLeft: 260
        }}>
        
          <Image source={pic} style={{ flex: 1, width: null, height: null }} />

        </View>
      </View>
    )
  }
}