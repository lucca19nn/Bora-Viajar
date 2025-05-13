import React from "react";
import { View, SafeAreaView, FlatList, Dimensions, Text, Image, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";


export default function Centro() {
    const goias = [
        { id: "1", name: "Goiânia (capital)", state: "GO", text: "Cidade moderna, planejada, e um dos principais centros urbanos da região Centro-Oeste do Brasil.", links: "https://www.tripadvisor.com.br/Attractions-g303323-Activities-State_of_Goias.html" },
        { id: "2", name: "Chapada dos Veadeiros", state: "GO", text: "Localizada no estado de Goiás, a Chapada dos Veadeiros é um parque nacional famoso por suas cachoeiras, trilhas e formações rochosas. Destinos como a Cachoeira de Santa Bárbara e a Cachoeira do Segredo são altamente recomendados para os amantes de natureza." },
        { id: "3", name: "Rio Quente", state: "GO", text: "Situado no estado de Goiás, Rio Quente é famoso por suas águas termais, com temperaturas que chegam a 38°C. O Hot Park é um dos maiores parques aquáticos da região e oferece diversas atrações para todas as idades." }
    ];

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image style={styles.headerImage} source={{ uri: 'https://i.pinimg.com/736x/50/ec/99/50ec996bf812653eb12861ac7201e98f.jpg' }} />
            <View style={styles.textOverlay}>
                    <Text style={styles.titleImage}>Centro-Oeste</Text>
                    <Text style={styles.subtitleImage}>Rio Quente, Goiás</Text>
                </View>
            </View>
            <View style={styles.textContainer} >
                <Text style={styles.StateTitle}>Goiás</Text>
                <Text style={styles.stateText}>Goiás é um estado no centro do Brasil que combina natureza exuberante, tradições culturais e desenvolvimento. Com paisagens naturais, culinária típica e festas tradicionais, encanta visitantes de todos os perfis. Sua capital, Goiânia, se destaca como uma cidade moderna, arborizada e acolhedora. É um destino completo para quem busca lazer, cultura e contato com a natureza.</Text>
                </View>

            <SafeAreaView>


            </SafeAreaView>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar ao Filtro</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#fff",
    },
    imageContainer: {
        position: "relative", // Necessário para posicionar o texto sobre a imagem
    },
    headerImage: {
        width: "100%",
        height: 400,
        resizeMode: "cover",
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
    },
    textOverlay: {
        position: "absolute",
        bottom: 20, // Alinha o texto na parte inferior da imagem
        left: 20, // Alinha o texto no canto esquerdo
    },
    titleImage: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
        color: "#fff",
        textShadowColor: 'rgba(0, 0, 0, 0.75)', // Cor da sombra
        textShadowOffset: { width: 1, height: 1 }, // Deslocamento da sombra
        textShadowRadius: 2,
    },
    subtitleImage: {
        fontSize: 20,
        textAlign: "center",
        marginTop: 5,
        color: "#fff",
        textShadowColor: 'rgba(0, 0, 0, 0.75)', // Cor da sombra
        textShadowOffset: { width: 1, height: 1 }, // Deslocamento da sombra
        textShadowRadius: 2,
    },
    textContainer: {
        alignItems: "center",
        marginVertical: 20,
    },
    StateTitle: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
        color: "#000",
    },
    stateText: {
        fontSize: 18,
        textAlign: "justify",
        marginHorizontal: 40,
        color: "#000",
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
}