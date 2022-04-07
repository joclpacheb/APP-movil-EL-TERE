import React from 'react';
import { StyleSheet, Dimensions, Text, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');
import { argonTheme } from "../constants";

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;
const categories = [
  {
    title: "Miércoles de Sopas",
    description:
      "El evento favorito de la comunidad. Visítanos y comparte en familia las mejores sopas por tan solo 1$ durante este Jueves 4-4-2022",
    image:
      "https://saboryestilo.com.mx/wp-content/uploads/2020/11/Sopa-Papa.jpg",
    price: "$1"
  },
  {
    title: "Ofertas de Semana Santa",
    description:
      "Tenemos durante semana santa ofertas especiales para ti del 50% en nuestros productos de categoría Hortalizas.",
    image:
      "https://blogmx.jacto.com/wp-content/uploads/2020/11/cultivo-de-hortalizas.jpg",
    price: "50% de descuento"
  }
];



class Home extends React.Component {

  renderArticles = () => {
    return (
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.articles}>
          <Block left>
            <Text color="#8898AA" size={16} bold style={{ textAlign: 'left', marginTop: 1, marginBottom: 10 }}>
              Promociones y Eventos:</Text>
          </Block>

          <ScrollView horizontal style={{ paddingHorizontal: 0 }}>

            <Block row flex>
              <Card item={articles[5]} style={{ marginRight: 20 }} vertical />
              <Card item={articles[6]} style={{ marginRight: 20 }} vertical />
              <Card item={articles[5]} style={{ marginRight: 20 }} vertical />
              <Card item={articles[6]} style={{ marginRight: 20 }} vertical />
            </Block>
          </ScrollView>

          <Text color="#8898AA" size={16} bold style={{ textAlign: 'left', marginTop: 20, marginBottom: 10 }}>
            Comercios:</Text>
          <Block grid flex center >

            <Block row flex  >
              <Card item={articles[3]} style={{ marginRight: 20 }} />
              <Card item={articles[2]} style={{}} />
            </Block>
            <Block row flex >
              <Card item={articles[1]} style={{ marginRight: 20 }} />
              <Card item={articles[3]} style={{}} />
            </Block>
            <Block row flex >
              <Card item={articles[2]} style={{ marginRight: 20 }} />
              <Card item={articles[1]} style={{}} />
            </Block>
          </Block>

        </ScrollView></>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>

        {this.renderArticles()}
      </Block>


    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;

