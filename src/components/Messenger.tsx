import { SafeAreaView, Text, TextInputComponent, View } from "react-native"
import Login from "./account/Login";
import { StyleSheet } from "react-native";
import { Image } from "react-native";


const Messenger = () => {
    return (
       <SafeAreaView>
        <View>
           <Login/>
        </View>
       </SafeAreaView>
    )
}

export default Messenger;
