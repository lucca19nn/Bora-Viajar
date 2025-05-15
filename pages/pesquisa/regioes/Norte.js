import React from "react";
import {
    View,
    FlatList,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const estados = [
    {
        id: "ac",
        nome: "Acre",
        capital: "Rio Branco",
        imagem:
            "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/rio-branco-acre-capa2019-01.jpg",
        descricao:
            "O Acre é conhecido por sua floresta amazônica, cultura indígena e rios navegáveis. Rio Branco, a capital, oferece museus e contato com a natureza.",
        pontos: [
            {
                id: "ac-1",
                titulo: "Parque Ambiental Chico Mendes",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/parque-chico-mendes-acre-capa2019-01.jpg",
            },
            {
                id: "ac-2",
                titulo: "Rio Acre",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/rio-acre-capa2019-01.jpg",
            },
            {
                id: "ac-3",
                titulo: "Museu da Borracha",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/museu-borracha-acre-capa2019-01.jpg",
            },
        ],
    },
    {
        id: "am",
        nome: "Amazonas",
        capital: "Manaus",
        imagem:
            "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/manaus-amazonas-capa2019-01.jpg",
        descricao:
            "O Amazonas abriga a maior floresta tropical do mundo e o famoso Encontro das Águas. Manaus destaca-se pelo Teatro Amazonas e rica cultura.",
        pontos: [
            {
                id: "am-1",
                titulo: "Teatro Amazonas",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/teatro-amazonas-capa2019-01.jpg",
            },
            {
                id: "am-2",
                titulo: "Encontro das Águas",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/encontro-aguas-amazonas-capa2019-01.jpg",
            },
            {
                id: "am-3",
                titulo: "Mercado Municipal Adolpho Lisboa",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/mercado-municipal-manaus-capa2019-01.jpg",
            },
        ],
    },
    {
        id: "ap",
        nome: "Amapá",
        capital: "Macapá",
        imagem:
            "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/macapa-amapa-capa2019-01.jpg",
        descricao:
            "O Amapá é famoso pelo Marco Zero do Equador e pela Fortaleza de São José. Macapá oferece cultura, história e belezas naturais.",
        pontos: [
            {
                id: "ap-1",
                titulo: "Marco Zero do Equador",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/marco-zero-macapa-capa2019-01.jpg",
            },
            {
                id: "ap-2",
                titulo: "Fortaleza de São José",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/fortaleza-sao-jose-macapa-capa2019-01.jpg",
            },
            {
                id: "ap-3",
                titulo: "Parque Nacional do Tumucumaque",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/parque-tumucumaque-amapa-capa2019-01.jpg",
            },
        ],
    },
    {
        id: "pa",
        nome: "Pará",
        capital: "Belém",
        imagem:
            "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/belem-para-capa2019-01.jpg",
        descricao:
            "O Pará encanta com a Ilha de Marajó, culinária típica e o Círio de Nazaré. Belém é famosa pelo Mercado Ver-o-Peso e manguezais.",
        pontos: [
            {
                id: "pa-1",
                titulo: "Mercado Ver-o-Peso",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/mercado-ver-o-peso-belem-capa2019-01.jpg",
            },
            {
                id: "pa-2",
                titulo: "Ilha de Marajó",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/ilha-marajo-para-capa2019-01.jpg",
            },
            {
                id: "pa-3",
                titulo: "Basílica de Nazaré",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/basilica-nazare-belem-capa2019-01.jpg",
            },
        ],
    },
    {
        id: "ro",
        nome: "Rondônia",
        capital: "Porto Velho",
        imagem:
            "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/porto-velho-rondonia-capa2019-01.jpg",
        descricao:
            "Rondônia destaca-se pela Estrada de Ferro Madeira-Mamoré, rios e reservas naturais. Porto Velho é a porta de entrada para a Amazônia Ocidental.",
        pontos: [
            {
                id: "ro-1",
                titulo: "Estrada de Ferro Madeira-Mamoré",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/estrada-ferro-madeira-mamore-capa2019-01.jpg",
            },
            {
                id: "ro-2",
                titulo: "Catedral Sagrado Coração de Jesus",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/catedral-porto-velho-capa2019-01.jpg",
            },
            {
                id: "ro-3",
                titulo: "Parque Natural de Porto Velho",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/parque-natural-porto-velho-capa2019-01.jpg",
            },
        ],
    },
    {
        id: "rr",
        nome: "Roraima",
        capital: "Boa Vista",
        imagem:
            "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/boa-vista-roraima-capa2019-01.jpg",
        descricao:
            "Roraima é conhecido pelo Monte Roraima, paisagens exóticas e cultura indígena. Boa Vista é uma das capitais mais planejadas do Brasil.",
        pontos: [
            {
                id: "rr-1",
                titulo: "Monte Roraima",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/monte-roraima-capa2019-01.jpg",
            },
            {
                id: "rr-2",
                titulo: "Praça das Águas",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/praca-aguas-boa-vista-capa2019-01.jpg",
            },
            {
                id: "rr-3",
                titulo: "Orla Taumanan",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/orla-taumanan-boa-vista-capa2019-01.jpg",
            },
        ],
    },
    {
        id: "to",
        nome: "Tocantins",
        capital: "Palmas",
        imagem:
            "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/palmas-tocantins-capa2019-01.jpg",
        descricao:
            "Tocantins é famoso pelo Jalapão, com dunas, cachoeiras e paisagens únicas. Palmas, a capital, é moderna e planejada.",
        pontos: [
            {
                id: "to-1",
                titulo: "Jalapão",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/jalapao-tocantins-capa2019-01.jpg",
            },
            {
                id: "to-2",
                titulo: "Praia da Graciosa",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/praia-graciosa-palmas-capa2019-01.jpg",
            },
            {
                id: "to-3",
                titulo: "Parque Cesamar",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/parque-cesamar-palmas-capa2019-01.jpg",
            },
        ],
    },
];

export default function Norte() {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <View style={{ width, alignItems: "center" }}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.imagem }} style={styles.headerImage} />
                <View style={styles.textOverlay}>
                    <Text style={styles.titleImage}>{item.nome}</Text>
                    <Text style={styles.subtitle}>
                        {item.capital ? `${item.capital} - ${item.id.toUpperCase()}` : ""}
                    </Text>
                </View>
            </View>

            <View style={styles.descricaoContainer}>
                <Text style={styles.descricao}>{item.descricao}</Text>
            </View>

            <View style={styles.pontosContainer}>
                {item.pontos.map((ponto) => (
                    <View key={ponto.id} style={styles.pontoBox}>
                        <Image source={{ uri: ponto.imagem }} style={styles.pontoImage} />
                        <Text style={styles.pontoTitulo}>{ponto.titulo}</Text>
                    </View>
                ))}
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={estados}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}>Voltar ao Filtro</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    imageContainer: {
        position: "relative",
    },
    headerImage: {
        width: width,
        height: 350,
        resizeMode: "cover",
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    textOverlay: {
        position: "absolute",
        bottom: 20,
        left: 20,
    },
    titleImage: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    pontosContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
        gap: 16,
    },
    pontoBox: {
        alignItems: "center",
        marginHorizontal: 9,
        marginTop: 15,
    },
    pontoImage: {
        width: 100,
        height: 100,
        borderRadius: 20,
        marginBottom: 8,
    },
    pontoTitulo: {
        fontSize: 15,
        textAlign: "center",
        maxWidth: 100,
        fontWeight: "500",
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
    descricaoContainer: {
        paddingHorizontal: 20,
        marginTop: 25,
        alignItems: "center",
    },
    descricao: {
        fontSize: 17,
        color: "#333",
        textAlign: "justify", 
        fontWeight: "500",
    },
    subtitle: {
        fontSize: 15,
        color: "#f0f0f0",
        fontWeight: "600",
        marginTop: 4,
    },
};
