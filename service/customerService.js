import Axios from 'axios'

function inputcustomer(data){
return Axios.post('http://192.168.1.35:1000/customer',data)
}

function login (data){
return Axios.post('http://192.168.1.35:1000/login',data)
}

function getcustomer(customerNumber){
    return Axios.get(`http://192.168.1.35:1000/customer/${customerNumber}`)
}
export {inputcustomer,login,getcustomer}