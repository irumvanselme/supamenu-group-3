import { useState } from 'react'

export default ()=>{
    const url = "http://196.223.240.154:8099/supapp/api/service-rating";

    const [results, setResults] = useState([]);
    const [ratingError, setratingError] = useState('');
    
    const rateServiceAPI = async (rate, userId, serviceProvider) => {

      const requestBody = {
        "reviewComment": "No comment provided",
        "score": rate,
        "serviceProvider": serviceProvider,
        "status": "ACTIVE",
        "userId": userId
      };
      
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