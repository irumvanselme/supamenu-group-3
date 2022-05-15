import { SafeAreaView, View , Text, StyleSheet, Image } from "react-native";
import FooterImage from "../../components/FooterImage";
import Stars from "../../components/Stars";
import useRatings from "../../hooks/useRatings";
import styles from "../../styles";

export default function RateScreen() {
    const stars = [1,2,3,4,5];
    const [rateServiceAPI, results, searchError] = useRatings();

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
                  color={number>=3 ? '#ffffff' : '#f7941d'}
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