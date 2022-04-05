import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>

          <Card item={articles[0]} horizontal />
          <Block flex row>
            <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[2]} />
          </Block>
          <Card item={articles[3]} horizontal />
          <Card item={articles[4]} full />
        </Block>


      </ScrollView>
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

