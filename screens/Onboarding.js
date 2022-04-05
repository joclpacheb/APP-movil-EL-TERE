import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import argonTheme from "../constants/Theme";
import Images from "../constants/Images";

class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center>
          <ImageBackground
            source={Images.Onboarding} //imagen naranja de fondo
            style={{ height, width, zIndex: 1 }}
          />
        </Block>

        <Block middle style={styles.avatarContainer}>
          <Image
            source={{ uri: Images.ProfilePicture }}
            style={styles.avatar}
          />
        </Block>

        <Block center>
          <Image source={Images.logoBlanco} style={styles.logo} />
        </Block>
        <Block flex space="between" style={styles.padded}>
          <Block flex space="around" style={{ zIndex: 2 }}>
            <Block style={styles.title}>
              <Block>
                <Text color="white" bold size={70} >
                  ¡Hola!
                </Text>
              </Block>
              <Block style={styles.subTitle}>
                <Text color="white" size={18}>
                  {"\n"}Te damos la bienvenida a la App oficial
                  de EL TERE.

                </Text>

                <Text color="white" size={18}>
                  {"\n"}¡Somos tu mejor aliado para hacer mercado!
                </Text>
              </Block>
            </Block>
            <Block center>
              <Button
                style={styles.button}
                color={argonTheme.COLORS.SECONDARY}
                onPress={() => navigation.navigate("Login")} //aquí navega a la pantalla de login
                textStyle={{ color: argonTheme.COLORS.PRIMARY }}

              >
                COMIENZA AQUÍ
              </Button>
            </Block>
          </Block>
        </Block>
      </Block >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 4,
    shadowRadius: 0,
    shadowOpacity: 0,
    borderRadius: 30,
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80
  },
  logo: {
    width: 300,
    height: 300,
    zIndex: 2,
    position: 'relative',
    marginTop: '-80%'
  },
  title: {
    marginTop: '-0%'
  },
  subTitle: {
    marginTop: 10
  }
});

export default Onboarding;
