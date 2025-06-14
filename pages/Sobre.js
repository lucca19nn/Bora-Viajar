import React from "react";
import { View, StyleSheet, FlatList, SafeAreaView} from "react-native";
import CardSobre from "../components/CardSobre";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../components/CustomHeader";

export default function Sobre() {
    const sobre = [
        {
            id: "1",
            name: "Amanda",
            age: "Eu sou Desenvolvedora Front-End, tenho 17 anos e moro em Campinas-SP.",
            image: require("../assets/amanda.png"),
            link: "http://www.linkedin.com/in/amanda-mechi-4287b52b1",
            isLocalImage: true, // Indica que a imagem é local
        },
        {
            id: "2",
            name: "Andre",
            age: "Eu sou Desenvolvedor Mobile, tenho 18 anos e moro em Campinas-SP.",
            image: require("../assets/andre.jpg"),
            link: "http://www.linkedin.com/in/andr%C3%A9-lucca-santos-63345934a",
            isLocalImage: true,
        },
        {
            id: "3",
            name: "Flavia",
            age: "Eu sou Scrum Master e desenvolvedora Front-End, tenho 17 anos e moro em Campinas-SP.",
            image: require("../assets/flavia.jpg"),
            link: "https://www.linkedin.com/in/flaviamendes17?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            isLocalImage: true,
        },
        {
            id: "4",
            name: "Giovanna",
            age: "Eu sou Desenvolvedora Front-End, tenho 17 anos e moro em Valinhos-SP.",
            image: require("../assets/giovanna.jpg"),
            link: "https://www.linkedin.com/in/giovanna-caron?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            isLocalImage: true,
        },
        {
            id: "5",
            name: "Isabella",
            age: "Eu sou Desenvolvedora Mobile, tenho 17 anos e moro em Valinhos-SP.",
            image: require("../assets/isabella.jpg"),
            link: "https://www.linkedin.com/in/isabella-borin-792b222b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            isLocalImage: true,
        },
        {
            id: "6",
            name: "João",
            age: "Eu sou Desenvolvedor Back-End, tenho 17 anos e moro em Campinas-SP.",
            image: require("../assets/Joao.jpeg"),
            link: "https://www.linkedin.com/in/jo%C3%A3o-vitor-porto-sales-18bb202b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            isLocalImage: true,
        },
        {
            id: "7",
            name: "Laura",
            age: "Eu sou PO (Product Owner), Tech Líder e desenvolvedora Back-End, tenho 17 anos e moro em Valinhos-SP.",
            image: require("../assets/laura.jpg"),
            link: "https://www.linkedin.com/in/laura-ferreira-violla-a526b12b1/",
            isLocalImage: true,
        },
    ];

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <CustomHeader title="Sobre nós" onBack={() => navigation.goBack()} />
            <FlatList
                style={styles.verticalList}
                data={sobre}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.cardContainer}>
                        <CardSobre 
                            name={item.name} 
                            age={item.age} 
                            image={item.image} 
                            link={item.link} 
                        />
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5", 
        paddingHorizontal: 10, 
    },
    title: {
        textAlign: "center",
        bold: 300,
        fontSize: 30,
        margin: 20,
    },
    cardContainer: {
        width: "100%", 
        marginBottom: 15, 
    },
    verticalList: {
        flexGrow: 1,
    },
    button: {
        backgroundColor: "#00bcd4",
        padding: 10,
        margin: 20,
        borderRadius: 5,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});