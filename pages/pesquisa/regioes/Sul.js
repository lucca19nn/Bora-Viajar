import React from "react";
import { Text, View, Image, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity  } from "react-native";

export default function Sul(){
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.header}>
                    <Image
                        source={require("../../../assets/logo.png")}
                        style={styles.logo}
                    /> 
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({

})