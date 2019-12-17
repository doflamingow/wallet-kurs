import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class CallComp extends Component<Props> {
    constructor(props){
        super(props);
        this.state ={
            test2:''
        };
    }


    render() {
          return (
            <View>
              <Text>Calling Component</Text>
              <TextInput value={this.props.text}/>

              <Button
              onPress={this._onButtonPress}
              title="Press Me"
            >
              Press Me
            </Button>

            
            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text)=> {
                const {changeText}=this.props
                if (changeText && typeof changeText==='function'){
                    changeText(text)
                }
            }}
            value={this.props.data}
          >
          </TextInput>
            </View>
          );
        
        }
        _onButtonPress = () => {
            const {buttonPress} = this.props;
            if(buttonPress && typeof buttonPress == 'function'){
                buttonPress();
            }
            else {
                return;
            }
        }

}