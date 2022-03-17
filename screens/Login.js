import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { Colors } from "react-native/Libraries/NewAppScreen";

const { width, height } = Dimensions.get("screen");

class Register extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >

          <Block safe flex middle>
            <Block>
              <Image source={Images.logoBlanco} //logo principal arriba
                style={{
                  width: 150,
                  height: 150, marginBottom: theme.SIZES.BASE * 2.5
                }} />
            </Block>
            <Block style={styles.registerContainer}>

              <Block flex>
                <Block flex={0.2} middle>
                  <Text color="#8898AA" size={16}>
                    Inicia sesión con tu usuario:
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >

                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        style={{ borderRadius: 20, elevation: 2 }}
                        borderless
                        placeholder="Usuario o Correo Electrónico"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8}>
                      <Input
                        style={{ borderRadius: 20, elevation: 2 }}
                        password
                        borderless
                        placeholder="Contraseña"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />

                    </Block>
                    <Block middle>
                      <Button color="primary" style={styles.createButton}
                        onPress={() => navigation.navigate("App")} //aquí navega a la pantalla principal
                      >
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          INICIAR SESIÓN
                        </Text>
                      </Button>
                      <Button color="secondary" style={styles.createButton}
                        onPress={() => navigation.navigate("Account")} //aquí navega a la pantalla principal

                      >
                        <Text bold size={14} color={argonTheme.COLORS.PRIMARY}>
                          CREAR UNA CUENTA
                        </Text>
                      </Button>
                      <Button //corregir, colocar en una sola fila los dos botones de olvide mi contraseña y entrar como invitado
                        style={styles.termsButton}
                        color="transparent"
                        textStyle={{
                          color: argonTheme.COLORS.PRIMARY,
                          fontSize: 14
                        }}
                      >
                        Olvidé mi contraseña
                      </Button>

                    </Block>

                    <Button
                      style={styles.termsButton}
                      color="transparent"
                      textStyle={{
                        color: argonTheme.COLORS.PRIMARY,
                        fontSize: 14
                      }}
                    >
                      Entrar como Invitado
                    </Button>
                  </KeyboardAvoidingView>

                </Block>
                <Button
                  style={styles.termsButton}
                  color="transparent"
                  textStyle={{
                    color: argonTheme.COLORS.PRIMARY,
                    fontSize: 14
                  }}
                >
                  Entrar como Invitado
                </Button>
              </Block>


              <Block flex={0.40} middle style={styles.socialConnect}>
                <Text color="#8898AA" size={16}>
                  Inicia sesión con tu cuenta de:
                </Text>
                <Block row style={{ marginTop: theme.SIZES.BASE }}>

                  <Button style={styles.socialButtons}>
                    <Block row>
                      <Icon
                        name="logo-google"
                        family="Ionicon"
                        size={14}
                        color={argonTheme.COLORS.PRIMARY}
                        style={{ marginTop: 2, marginRight: 5 }}
                      />
                      <Text style={styles.socialTextButtons}>GOOGLE</Text>
                    </Block>
                  </Button>

                </Block>

              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block >
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.6,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderTopWidth: StyleSheet.hairlineWidth,

  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.ERROR,
    shadowOffset: {
      width: 0,
      height: 4
    },
    borderColor: argonTheme.COLORS.PRIMARY,
    borderWidth: 1,
    borderRadius: 20,
    shadowOpacity: 0.5,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 10
  },
  createButton: {
    width: width * 0.5,
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: argonTheme.COLORS.PRIMARY

  },
  termsButton: {
    width: width * 0.5,
    elevation: 0,
    marginTop: 0
  }
});

export default Register;
