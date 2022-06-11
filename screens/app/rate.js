import { SafeAreaView, View , Text, StyleSheet, Image } from "react-native";
import FooterImage from "../../components/FooterImage";
import Stars from "../../components/Stars";
import styles from "../../styles";
import { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../../utils/token";

export default function RateScreen() {
    const stars = [1,2,3,4,5];
    const [results, setResults] = useState([]);
    const [ratingNumber, setratingNumber] = useState(0);
    
    const rateServiceAPI = async (rate)=>{
        await axios.post(`http://196.223.240.154:8099/supapp/api/service-rating`, {
            "reviewComment": "No comment provided",
            "score": rate,
            "serviceProvider": 1,
            "status": "ACTIVE",
            "userId": 1
        },{
            headers:{
                Authorization: `Bearer ${await getToken()}`,
            }
        }).then((res)=>{
            setratingNumber(rate)
            alert("Thank you for the feedback")
          }).catch((error)=>{
            alert("Error occured try again!")
          })
    }

    const getRating = async ()=>{
        axios.get(`http://196.223.240.154:8099/supapp/api/service-rating/1`,{
            headers:{
              Authorization: `Bearer ${await getToken()}`,
            }
        }).then((res)=>{
            setratingNumber(res.data.score)
        })
    }
    useEffect(()=>{
     getRating()
    },[])
    return (
        <SafeAreaView style={styles.container}>
            <View>
            <Text style={[styles.text]}>Yayy!</Text>
            <Text style={styles.text}>We value all feeback</Text>
            <Text style={styles.text}>please rate your experience below:</Text>
            </View>

            <View style={otherStyles.ratings}>
              {stars.map((number, index)=>(
                  <Stars  
                  key={index} 
                  rating={number} 
                  color={ratingNumber<=index ? '#ffffff' : '#f7941d'}
                  handleTap={(rating)=>rateServiceAPI(rating)}/>
              ))}
            </View> 
            
            <View style={{width: 200, textAlign: "center"}}>
                <Text style={[styles.text]}>{results}</Text>
            </View>
            <FooterImage />

        </SafeAreaView>
    );
}

const otherStyles = StyleSheet.create({
    ratings: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
    },
  });