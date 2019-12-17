
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {Provider} from "react-redux";
import {createStore} from 'redux';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { AppRegistry, TextInput } from 'react-native';
import customerReducer from './redux/customerReducer';


import {createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  SwitchNavigator} from "react-navigation";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Login from './component/Login';
import Register from './component/Register';

import Main from './component/transaction/Main';
import TransactionTopUp from './component/transaction/TransactionTopUp';
import TransactionTransfer from './component/transaction/TransactionTransfer';
import TransactionList from './component/transaction/TransactionList';

import AccountList from './component/account/AccountList';
import AccountAdd from './component/account/AccountAdd';
import DetailAccount from './component/account/DetailAccount';

import WalletRegister from './component/wallet/WalletRegister';
import WalletCreate from './component/wallet/WalletCreate';
import WalletMain from './component/wallet/WalletMain';
import WalletView from './component/wallet/WalletView';

import TradingView from './component/trading/TradingView';
import TradingTransaction from './component/trading/TradingTransaction';
import Outstanding from './component/trading/Outstanding';

const tabBarIcon = name => ({ tintColor }) => (
  <MaterialIcons
    style={{ backgroundColor: 'transparent' }}
    name={name}
    color={tintColor}
    size={20}
  />
);

const TabBottom = createBottomTabNavigator({
  Main:{
    screen : Main,
    navigationOptions: {
      tabBarIcon: tabBarIcon('home'),
    }
  },
  Trading:{
    screen:TradingView,
    navigationOptions: {
      tabBarIcon: tabBarIcon('show-chart'),
    }
  }
});

const StackTransaction = createStackNavigator({
  Main : {screen: TabBottom,
    navigationOptions: {
      header:null
    }},
  tradingtrans : {screen: TradingTransaction},
  trading : {screen: TradingView},
  transfer:{screen: TransactionTransfer},
  topup: {screen: TransactionTopUp},
  list:{screen: TransactionList},
  listAcc : {screen: AccountList},
  addAcc : {screen: AccountAdd},
  DetailAccount : {screen: DetailAccount},
  walletcreate : {screen: WalletCreate},
  walletregis : {screen: WalletRegister},
  walletmain : {screen: WalletView},
});

const StackTrading = createStackNavigator({
  tradingtrans : {screen: TradingTransaction}
})

const drawerNavigator = createDrawerNavigator({
  Home:{screen:StackTransaction}
})

const RootSwitch = createSwitchNavigator({
  Login :{screen: Login},
  Register : {screen : Register,
    navigationOptions: {
    title:'Register'
  }},
  Main : {screen: drawerNavigator}
})

const AppContainer=createAppContainer(RootSwitch)

// const AppContainer = createAppContainer(RootSwitch);


// const AppContainer  = createAppContainer(
//   createSwitchNavigator(
//   {
//     Auth: RootSwitch,
//     Dashboard: TabBottom,
//   },
//   {
//     initialRouteName: 'Auth',
//   }
//   )
// );

export default AppContainer 
// extends Component{
//   render(){
//     return (
//       <Provider store ={store}>
//       <AppContainer/>
//       </Provider>

//     )
//   }
// };

