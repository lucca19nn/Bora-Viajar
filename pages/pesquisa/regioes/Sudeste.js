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
        id: "sp",
        nome: "São Paulo",
        capital: "São Paulo",
        imagem:
            "https://jpimg.com.br/uploads/2024/01/aniversario-de-sao-paulo-10-curiosidades-sobre-a-cidade.jpg",
        descricao:
            "São Paulo é o estado mais populoso do Brasil, conhecido por sua capital cosmopolita, praias no litoral, serras e cidades históricas.",
        pontos: [
            {
                id: "sp-1",
                titulo: "Avenida Paulista",
                imagem:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/99/d8/ed/paulista.jpg?w=1200&h=1200&s=1",
            },
            {
                id: "sp-2",
                titulo: "Parque Ibirapuera",
                imagem:
                    "https://www.quintoandar.com.br/guias/wp-content/uploads/2023/08/o-que-fazer-no-parque-ibirapuera.jpeg",
            },
            {
                id: "sp-3",
                titulo: "Campos do Jordão",
                imagem:
                    "https://www.essemundoenosso.com.br/wp-content/uploads/2017/12/Quando-ir-pra-Campos-do-Jordao-Destaque.jpg",
            },
        ],
    },
    {
        id: "rj",
        nome: "Rio de Janeiro",
        capital: "Rio de Janeiro",
        imagem:
            "https://blog.123milhas.com/wp-content/uploads/2022/12/conheca-os-lugares-com-as-melhores-vistas-do-rio-de-janeiro-conexao123.jpg",
        descricao:
            "O Rio de Janeiro é famoso por suas praias, o Cristo Redentor, o Pão de Açúcar e o Carnaval. Possui belas cidades serranas e litorâneas.",
        pontos: [
            {
                id: "rj-1",
                titulo: "Cristo Redentor",
                imagem:
                    "https://media.gazetadopovo.com.br/2011/10/427e09b1459e99a981dcd583fc82618e-gpLarge.jpg",
            },
            {
                id: "rj-2",
                titulo: "Praia de Copacabana",
                imagem:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSM9g-MeuXNd9kAKlSsoOG5x4789FHVCg62A&s",
            },
            {
                id: "rj-3",
                titulo: "Pão de Açúcar",
                imagem:
                    "https://riodejaneiro.tur.br/wp-content/uploads/2024/08/pao-de-acucar-joao-ricardo-januzzi-1024x683.jpg",
            },
        ],
    },
    {
        id: "mg",
        nome: "Minas Gerais",
        capital: "Belo Horizonte",
        imagem:
            "https://viagemeturismo.abril.com.br/wp-content/uploads/2011/09/GettyImages-1164542668.jpg",
        descricao:
            "Minas Gerais é conhecida por suas cidades históricas, culinária típica, montanhas e cachoeiras. Belo Horizonte é a capital do estado.",
        pontos: [
            {
                id: "mg-1",
                titulo: "Ouro Preto",
                imagem:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcBFlzscTSMbGSHhHPecFDt0jjPOqHe5D3TQ&s",
            },
            {
                id: "mg-2",
                titulo: "Serra do Cipó",
                imagem:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHPdwEOBCEfuM6JKy0SVjJ_mwvUlWpH6Xjbg&s",
            },
            {
                id: "mg-3",
                titulo: "Inhotim",
                imagem:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYdKUKfVAYxqiMa2JpHh4YsEiQZOaeV_0mYQ&s",
            },
        ],
    },
    {
        id: "es",
        nome: "Espírito Santo",
        capital: "Vitória",
        imagem:
            "https://blog.123milhas.com/wp-content/uploads/2022/09/vitoria-es-curiosidades-sobre-a-capital-do-espirito-santo-conexao123-1.jpg",
        descricao:
            "O Espírito Santo possui belas praias, montanhas e cultura capixaba. Vitória, a capital, é conhecida por sua qualidade de vida e gastronomia.",
        pontos: [
            {
                id: "es-1",
                titulo: "Praia da Costa",
                imagem:
                    "https://images.ctfassets.net/uzue8dgm4ubt/4YIFzd2Gj3d5krPAvW4xul/82e2c602a7b691855fbc540b3e8fcdcb/Praia_da_Costa_Vilha_Velha.jpg",
            },
            {
                id: "es-2",
                titulo: "Convento da Penha",
                imagem:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdeohWonpNk4JWiobMH2JF8xJk0pgTty61ZA&s",
            },
            {
                id: "es-3",
                titulo: "Domingos Martins",
                imagem:
                    "https://www.vaidepromo.com.br/blog/wp-content/uploads/2024/01/Onde-fica-Domingos-Martins-1024x682.jpg",
            },
        ],
    },
];

export default function Sudeste() {
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
