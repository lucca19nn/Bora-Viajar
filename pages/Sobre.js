import React from "react";
import { Text, View, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Dimensions } from "react-native";
import CardSobre from "../components/CardSobre";
import { useNavigation } from "@react-navigation/native";

export default function Sobre() {
    const sobre = [
        {
            id: "1",
            name: "Amanda",
            age: "Eu sou Desenvolvedora Front-End e tenho 17 anos, moro em Campinas-SP",
            image: require("../assets/amanda.png"),
            link: "http://www.linkedin.com/in/amanda-mechi-4287b52b1",
            isLocalImage: true, // Indica que a imagem é local
        },
        {
            id: "2",
            name: "Andre",
            age: "Eu sou Desenvolvedor Mobile e tenho 18 anos, moro em Campinas-SP",
            image: "",
            link: "",
            isLocalImage: true,
        },
        {
            id: "3",
            name: "Flavia",
            age: "Eu sou Scrum Master e desenvolvedora Front-End e tenho 17 anos, moro em Campinas-SP",
            image: "",
            link: "",
            isLocalImage: true,
        },
        {
            id: "4",
            name: "Giovanna",
            age: "Eu sou Desenvolvedora Front-End e tenho 17 anos, moro em Valinhos-SP",
            image: require("../assets/giovanna.jpg"),
            link: "https://www.linkedin.com/in/isabella-borin-792b222b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            isLocalImage: true,
        },
        {
            id: "5",
            name: "Isabella",
            age: "Eu sou Desenvolvedora Mobile e tenho 17 anos, moro em Campinas-SP",
            image: require("../assets/isabella.jpg"),
            link: "https://www.linkedin.com/in/isabella-borin-792b222b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            isLocalImage: true,
        },
        {
            id: "6",
            name: "João",
            age: "Eu sou Desenvolvedor Back-End e tenho 17 anos, moro em Campinas-SP",
            image: "",
            link: "",
            isLocalImage: true,
        },
        {
            id: "7",
            name: "Laura",
            age: "Eu sou PO (Product Owner), Tech Lead e desenvolvedora Back-End e tenho 17 anos, moro em Valinhos-SP",
            image: require("../assets/laura.jpg"),
            link: "",
            isLocalImage: true,
        },
    ];

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Sobre Nós</Text>
            <FlatList
                style={styles.verticalList}
                data={sobre}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.cardContainer}>
                        {/* Passando as propriedades diretamente para o CardSobre */}
                        <CardSobre 
                            name={item.name} 
                            age={item.age} 
                            image={item.image} 
                            link={item.link} 
                        />
                    </View>
                )}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar ao Filtro</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5", // Cor de fundo da tela
        paddingHorizontal: 10, // Margem nas laterais
    },
    title: {
        textAlign: "center",
        bold: 300,
        fontSize: 30,
        margin: 20,
    },
    cardContainer: {
        width: "100%", // Cada card ocupa toda a largura disponível
        marginBottom: 15, // Espaço entre os cards
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