import axios from 'axios';
import { useState } from 'react'

export default ()=>{
    const BASE_URL = "http://196.223.240.154:8099/supapp/api";
    const [results, setResults] = useState([]);
    const [orderError, setorderError] = useState('');

    const orderServiceAPI = async (order) => {
        try{    
          const response = await axios.get(`${BASE_URL}/order-items/${order}`).data;
          console.log("Download");
         console.log(response);
         alert("Thank you for your feedback!");
       }catch(error){
        setorderError("Error Occurred!")
       }
    };

    return [results, orderError, orderServiceAPI]
}