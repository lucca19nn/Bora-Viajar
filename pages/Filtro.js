import React from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import Card from "../components/Card";
import CardFiltro from "../components/CardFiltros";

export default function Filtro() {
const destinos = [
    {
        id: "1", title: "Norte", subtitle: "Veja mais...", image:
            "https://imgmd.net/images/c_limit%2Cw_3200/v1/guia/1698592/norte-5-cat.jpg",
            navigateTo: "Norte",
    },
    {
        id: "2", title: "Nordeste", subtitle: "Veja mais...", image:
            "https://blog.hurb.com/wp-content/uploads/2024/09/10-Melhores-Praias-do-Nordeste-Brasileiro-Capa.jpg",
            navigateTo: "Nordeste",
    },
    {
        id: "3", title: "Centro-Oeste", subtitle: "Veja mais...", image:
        "https://www.vidadeturista.com/wp-content/uploads/2016/03/cidades-outono-2016-brasilia-df.jpg",
        navigateTo: "Centro-Oeste",
    },
    {
      id: "4", title: "Sul", subtitle: "Veja mais...", image:
        "https://media.staticontent.com/media/pictures/04641818-297a-4f28-b635-b15e2fb31087",
        navigateTo: "Sul",
    },
    {
      id: "5", title: "Sudeste", subtitle: "Veja mais...", image:
        "https://cdn.blablacar.com/wp-content/uploads/br/2024/06/05094038/rio-de-janeiro.webp",
        navigateTo: "Sudeste",
    },
];

const noticias = [
    {
        id: "1", title: "Norte", subtitle: "Veja mais...", image:
            "https://imgmd.net/images/c_limit%2Cw_3200/v1/guia/1698592/norte-5-cat.jpg",

    },
    {
        id: "2", title: "Nordeste", subtitle: "Veja mais...", image:
            "https://blog.hurb.com/wp-content/uploads/2024/09/10-Melhores-Praias-do-Nordeste-Brasileiro-Capa.jpg",
    },
    {
        id: "3", title: "Centro-Oeste", subtitle: "Veja mais...", image:
        "https://www.vidadeturista.com/wp-content/uploads/2016/03/cidades-outono-2016-brasilia-df.jpg",
    },
    {
      id: "4", title: "Sul", subtitle: "Veja mais...", image:
        "https://media.staticontent.com/media/pictures/04641818-297a-4f28-b635-b15e2fb31087",
    },
    {
      id: "5", title: "Sudeste", subtitle: "Veja mais...", image:
        "https://cdn.blablacar.com/wp-content/uploads/br/2024/06/05094038/rio-de-janeiro.webp",
    },
];

  return (
    <ScrollView style={styles.container}>
  <Text style={styles.title}>Top destinos</Text>
  <FlatList
    data={destinos}
    renderItem={({ item }) => (
      <Card
        title={item.title}
        description={item.subtitle}
        image={item.image}
      />
    )}
    keyExtractor={(item) => item.id}
    horizontal={true} 
    showsHorizontalScrollIndicator={false} 
    contentContainerStyle={{ paddingHorizontal: 10 }} 
  />
  <Text style={styles.title}>Principais Notícias</Text>
  <FlatList
    data={noticias}
    renderItem={({ item }) => (
      <CardFiltro
         title={item.title}
         description={item.subtitle}
         image={item.image}
      />
    )}
    keyExtractor={(item) => item.id}
    numColumns={1} 
    nestedScrollEnabled={true} 
/>

</ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "left",
    },
    flatList: {
        flexGrow: 0,
    },
});
