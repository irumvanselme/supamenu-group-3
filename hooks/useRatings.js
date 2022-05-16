import { useState,useEffect } from 'react'

export default ()=>{

    const [results, setResults] = useState([]);
    const [ratingError, setratingError] = useState('');
    
    const rateServiceAPI = async (rate) => {
        try{    
         alert("Thank you for your feedback!");
         if(rate>3){
          setResults("Thank you for helping us improve our service.");
         }else{
           setResults("")
         }
       }catch(error){
         setratingError("Error Occurred!")
       }
    };

    return [rateServiceAPI, results, ratingError];
}