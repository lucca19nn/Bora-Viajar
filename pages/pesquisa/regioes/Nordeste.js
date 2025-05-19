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
        id: "ba",
        nome: "Bahia",
        capital: "Salvador",
        imagem:
            "https://blog.123milhas.com/wp-content/uploads/2022/04/conheca-estado-bahia-conexao123.jpg",
        descricao:
            "Bahia é famosa por sua cultura afro-brasileira, festas populares, belas praias e patrimônio histórico. Salvador, sua capital, abriga o Pelourinho e uma vida noturna animada. O estado também oferece destinos naturais como a Chapada Diamantina.",
        pontos: [
            {
                id: "ba-1",
                titulo: "Pelourinho",
                imagem:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/43/ac/8f/pelourinho.jpg?w=700&h=400&s=1",
            },
            {
                id: "ba-2",
                titulo: "Praia do Forte",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2022/05/praia-do-forte-capa-3.jpg",
            },
            {
                id: "ba-3",
                titulo: "Chapada Diamantina",
                imagem:
                    "https://jujunatrip.com/wp-content/uploads/2022/01/fazenda-pratinha-chapada-diamantina.jpg.webp",
            },
        ],
    },
    {
        id: "ce",
        nome: "Ceará",
        capital: "Fortaleza",
        imagem:
            "https://cdn.blablacar.com/wp-content/uploads/br/2023/10/05100107/fortaleza-ce.webp",
        descricao:
            "O Ceará encanta com praias paradisíacas, dunas e clima ensolarado. Destinos como Jericoacoara e Canoa Quebrada atraem turistas em busca de belezas naturais e esportes. Fortaleza oferece vida urbana, cultura e belas orlas.",
        pontos: [
            {
                id: "ce-1",
                titulo: "Canoa Quebrada",
                imagem:
                    "https://media.istockphoto.com/id/489545923/pt/foto/canoa-quebrada.jpg?s=612x612&w=0&k=20&c=_jD0bpVP3qINSOQIQvKzTDIUTBjCUBOcHt1uhPrQd54=",
            },
            {
                id: "ce-2",
                titulo: "Jericoacoara",
                imagem:
                    "https://zerandomundo.com/wp-content/uploads/2024/07/Lagoa-do-Paraiso-Jericoacoara.webp",
            },
            {
                id: "ce-3",
                titulo: "Fortaleza",
                imagem:
                    "https://turismo.b-cdn.net/wp-content/uploads/2013/01/Fortaleza-a-capital-do-Ceara.webp",
            },
        ],
    },
    {
        id: "al",
        nome: "Alagoas",
        capital: "Maceió",
        imagem:
            "https://media.staticontent.com/media/pictures/88836def-639e-414a-83e8-3fcaa3d74fa8",
        descricao:
            "Alagoas é famosa por águas cristalinas, piscinas naturais e praias como Maragogi e São Miguel dos Milagres. Maceió possui uma orla urbana deslumbrante e ótima infraestrutura turística.",
        pontos: [
            {
                id: "al-1",
                titulo: "Maragogi",
                imagem:
                    "https://viagemeturismo.abril.com.br/wp-content/uploads/2020/01/destino_mgi_09.jpg?quality=70&strip=info&w=1024",
            },
            {
                id: "al-2",
                titulo: "Praia do Gunga",
                imagem:
                    "https://www.praiasdemaceio.com/wp-content/uploads/2017/03/Praia-do-Gunga-AL.png",
            },
            {
                id: "al-3",
                titulo: "Pajuçara",
                imagem:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXlbXCkIhiuXmk2ddmvP3xkOzq4I2-0jUbuw&s",
            },
        ],
    },
    {
        id: "ma",
        nome: "Maranhão",
        capital: "São Luís",
        imagem:
            "https://www.mercadoeeventos.com.br/wp-content/uploads/2023/11/sao-luis-maranhao-divulgacao-scaled.jpg",
        descricao:
            "O Maranhão destaca-se pelos Lençóis Maranhenses, com dunas e lagoas incríveis. São Luís, a capital, é Patrimônio Mundial da UNESCO e tem um centro histórico preservado.",
        pontos: [
            {
                id: "ma-1",
                titulo: "Lençóis Maranhenses",
                imagem:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyB1sRk1Edf6rYf23gwaYAEx45QDPt8dPvA&s",
            },
            {
                id: "ma-2",
                titulo: "São Luís",
                imagem:
                    "https://radardf.com.br/wp-content/uploads/2023/12/A-ilha-de-Sao-Luis-e-o-point-no-Maranhao.jpg",
            },
            {
                id: "ma-3",
                titulo: "Barreirinhas",
                imagem:
                    "https://barreirinhasbrasil.com/wp-content/uploads/2023/05/Barreirinhas-Brasil-1st-img.jpg",
            },
        ],
    },
    {
        id: "pb",
        nome: "Paraíba",
        capital: "João Pessoa",
        imagem:
            "https://turismodenatureza.com.br/wp-content/uploads/2019/02/As_10_melhores_Praias_da_Para%C3%ADba.jpg",
        descricao:
            "A Paraíba oferece praias tranquilas, falésias coloridas e o charme histórico de João Pessoa. É conhecida pelo pôr do sol ao som do Bolero de Ravel na Praia do Jacaré.",
        pontos: [
            {
                id: "pb-1",
                titulo: "Praia de Tambaba",
                imagem:
                    "https://www.destinoparaiba.pb.gov.br/wp-content/uploads/2019/07/Tambaba_1119peq.jpg",
            },
            {
                id: "pb-2",
                titulo: "Praia do Jacaré",
                imagem:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/P%C3%B4r_do_Sol_Praia_do_Jacar%C3%A9_-_PB.jpg/1280px-P%C3%B4r_do_Sol_Praia_do_Jacar%C3%A9_-_PB.jpg",
            },
            {
                id: "pb-3",
                titulo: "Centro Histórico de João Pessoa",
                imagem:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOoZQz9eSoGumR-m8421YrYyMAe1kNz_p5Q&s",
            },
        ],
    },
    {
        id: "pe",
        nome: "Pernambuco",
        capital: "Recife",
        imagem:
            "https://caminhosmelevem.com/wp-content/uploads/2022/12/olinda-pernambuco-edit-34.jpg",
        descricao:
            "Pernambuco é conhecido por Recife, Olinda e Porto de Galinhas. O estado mistura história, cultura e belezas naturais, com festas populares e praias famosas.",
        pontos: [
            {
                id: "pe-1",
                titulo: "Porto de Galinhas",
                imagem:
                    "https://pousadadasgalinhas.com.br/wp-content/uploads/2024/07/porto-de-galinhas-2.webp",
            },
            {
                id: "pe-2",
                titulo: "Recife Antigo",
                imagem:
                    "https://viagemeturismo.abril.com.br/wp-content/uploads/2024/08/marco-zero-recife.jpg?crop=1&resize=1212,909",
            },
            {
                id: "pe-3",
                titulo: "Olinda",
                imagem:
                    "https://content.r9cdn.net/rimg/dimg/b9/72/ba475602-city-46823-16775b10715.jpg?width=1366&height=768&xhint=2153&yhint=1532&crop=true",
            },
        ],
    },
    {
        id: "pi",
        nome: "Piauí",
        capital: "Teresina",
        imagem:
            "https://vidasemparedes.com.br/wp-content/uploads/2024/07/teresina-vidasemparedes-8.jpg",
        descricao:
            "O Piauí surpreende com o Delta do Parnaíba e o Parque Nacional da Serra da Capivara, famoso por pinturas rupestres. O litoral tem praias tranquilas e belas paisagens.",
        pontos: [
            {
                id: "pi-1",
                titulo: "Delta do Parnaíba",
                imagem:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXni6ico6l1y_ai69JI_wCIDoGOQC_83MC2w&s",
            },
            {
                id: "pi-2",
                titulo: "Serra da Capivara",
                imagem:
                    "https://sesc-sc.com.br/sescsc/cache/imagens/institucional_imagem_pq_Institucional_id_3724.webp",
            },
            {
                id: "pi-3",
                titulo: "Praia de Barra Grande",
                imagem:
                    "https://imgmd.net/images/v1/guia/1605273/praia-de-taipu-de-fora.jpg",
            },
        ],
    },
    {
        id: "rn",
        nome: "Rio Grande do Norte",
        capital: "Natal",
        imagem:
            "https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2021/07/Morro-do-careca-Natal.jpg",         
        descricao:
            "O Rio Grande do Norte é famoso por dunas, lagoas e praias como Pipa e Genipabu. Natal oferece belas paisagens, gastronomia e passeios de buggy.",
        pontos: [
            {
                id: "rn-1",
                titulo: "Genipabu",
                imagem:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/96/dd/70/lindas-dunas.jpg?w=1200&h=1200&s=1",
            },
            {
                id: "rn-2",
                titulo: "Pipa",
                imagem:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPxInzPSj-yt7iiIPvng7AHIIF-7llIw49Kg&s",
            },
            {
                id: "rn-3",
                titulo: "Natal",
                imagem:
                    "https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2021/07/Morro-do-careca-Natal.jpg?w=1200&h=900&crop=1",
            },
        ],
    },
    {
        id: "se",
        nome: "Sergipe",
        capital: "Aracaju",
        imagem:
            "https://www.vivareal.com.br/blog/wp-content/uploads/2024/05/bairros-de-aracaju.jpg",
        descricao:
            "Sergipe encanta com o Cânion do Xingó, praias tranquilas e a hospitalidade de Aracaju. O estado também possui cidades históricas e turismo de natureza.",
        pontos: [
            {
                id: "se-1",
                titulo: "Aracaju",
                imagem:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ThnHSbjTmW1pKPUifN7fm9Su3qepYL6c0A&s",
            },
            {
                id: "se-2",
                titulo: "Cânion do Xingó",
                imagem:
                    "https://agenciaeconordeste.com.br/wp-content/uploads/2020/11/Figura-3-600x900-2.jpg",
            },
            {
                id: "se-3",
                titulo: "Praia do Saco",
                imagem:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSweQvkLhGunjbkKzfBnhBlWQx6fXXp192NPg&s",
            },
        ],
    },
];

export default function Nordeste() {
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

            {/* Descrição fora da imagem */}
            <View style={styles.descricaoContainer}>
                <Text style={styles.descricao}>{item.descricao}</Text>
            </View>

            {/* Pontos turísticos */}
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
