import AsyncStorage from '@react-native-community/async-storage';

const USERNAME="uname";

const signIn = async(username, password)=>{
    await AsyncStorage.setItem(USERNAME, username);
    return new Promise((res, reject)=>{
        res(true);
    })
}

const signOut = async()=>{
    await AsyncStorage.removeItem(USERNAME);
    return new Promise((res, reject)=>{
        res();
    })
}

const isSignedIn = async()=>{
    const user = await AsyncStorage.getItem(USERNAME);
    return new Promise((res, reject)=>{
        res(user===null? false: true);
    })
}

const getUserData = async ()=>{
    const user = await AsyncStorage.getItem(USERNAME);
    return new Promise((resolve, reject)=>{
        resolve(user);
    });
}


export{signIn, signOut, isSignedIn, getUserData};