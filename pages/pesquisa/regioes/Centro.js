import React from "react";
import { View, SafeAreaView, FlatList, ScrollView, Dimensions, Text, Image } from "react-native"

export default function Centro() {
    const goias = [
        { id:"1", name: "Goiânia (capital)", state: "GO", text: "Cidade moderna, planejada, e um dos principais centros urbanos da região Centro-Oeste do Brasil.", links: "https://www.tripadvisor.com.br/Attractions-g303323-Activities-State_of_Goias.html"},
        {id: "2", name: "Chapada dos Veadeiros", state: "GO", text: "Localizada no estado de Goiás, a Chapada dos Veadeiros é um parque nacional famoso por suas cachoeiras, trilhas e formações rochosas. Destinos como a Cachoeira de Santa Bárbara e a Cachoeira do Segredo são altamente recomendados para os amantes de natureza."},
        {id: "3", name: "Rio Quente", state: "GO", text: "Situado no estado de Goiás, Rio Quente é famoso por suas águas termais, com temperaturas que chegam a 38°C. O Hot Park é um dos maiores parques aquáticos da região e oferece diversas atrações para todas as idades."}
    ];
    return (
        <View>
            <Image style={styles.headerImage} source={{ uri: 'https://i.pinimg.com/736x/50/ec/99/50ec996bf812653eb12861ac7201e98f.jpg' }} />
            <Text style={styles.titleState}>Centro-Oeste</Text>
            <Text style={styles.subtitleState}>Rio Quente, Goiás</Text>
            <SafeAreaView>
                

            </SafeAreaView>
        </View>
    )
}