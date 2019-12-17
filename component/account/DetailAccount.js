import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Footer, Left, Body, Right, View, Text, List, ListItem, Icon, Button } from 'native-base';

export default class DetailAccount extends React.Component {
    static navigationOptions = {
        title:'Detail Account'
    }

    render() {
        return (
            <Container>
            <Content>
                    <List>
                        <ListItem itemDivider>
                            <Text>Account Number</Text>
                        </ListItem>
                        <ListItem>
                            <Text>{this.props.navigation.state.params.accountNumber}</Text>
                        </ListItem>

                        <ListItem itemDivider>
                        <Text>Customer Number</Text>
                    </ListItem>
                    <ListItem>
                        <Text>{this.props.navigation.state.params.customerNumber.customerNumber}</Text>
                    </ListItem>

                    
                    <ListItem itemDivider>
                    <Text>First Name</Text>
                </ListItem>
                <ListItem>
                    <Text>{this.props.navigation.state.params.customerNumber.firstName}</Text>
                </ListItem>
                    
                <ListItem itemDivider>
                <Text>Last Name</Text>
            </ListItem>
            <ListItem>
                <Text>{this.props.navigation.state.params.customerNumber.lastName}</Text>
            </ListItem>

                        <ListItem itemDivider>
                            <Text>Open Date</Text>
                        </ListItem>
                        <ListItem>
                            <Text>{this.props.navigation.state.params.openDate.slice(0,10)}</Text>
                        </ListItem>


                        <ListItem itemDivider>
                            <Text>Balance</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Rp {this.props.navigation.state.params.balance}</Text>
                        </ListItem>
                    </List>
                    <Button 
                        full
                        style={{backgroundColor: "green"}}
                        onPress={ () => {
                            this.props.navigation.navigate('list', this.props.navigation.state.params.accountNumber);
                        }}>
                        <Text>Your Transaction History</Text>
                    </Button>
                </Content>

                
            </Container>
        )
    }
}
