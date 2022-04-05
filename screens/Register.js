import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { HeaderHeight } from "../constants/utils";

const { width, height } = Dimensions.get("screen");

class Register extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>


        <Block flex middle>
          <StatusBar barStyle="light-content" />
          <ImageBackground
            source={Images.RegisterBackground}
            style={{ width, height, zIndex: 1 }}
          >

            <Block safe flex middle>
              <Block row space="evenly">
                <Block flex left style={{ paddingLeft: 30 }}>
                  <Text color="white" bold size={45} style={{ textAlign: 'left' }} >
                    Únete a{"\n"}EL TERE
                  </Text>
                </Block>
              </Block>

              <Block style={styles.registerContainer}>
                <Block flex >
                  <Block flex={0.25} >
                    <Text color="#5A7E64" size={16} bold style={{ textAlign: 'left', marginTop: 20, marginBottom: 10 }} >
                      ¡Queremos conocerte!</Text>
                    <Text color="#8898AA" size={16} >
                      Crea tu perfil personalizado llenando los siguientes campos:
                    </Text>
                  </Block>

                  <Block flex center>
                    <KeyboardAvoidingView
                      style={{ flex: 6 }}
                      behavior="padding"
                      enabled
                    >
                      <Block row space="evenly">
                        <Block flex left style={{ paddingRight: 9 }}>
                          <Input
                            style={{ borderRadius: 20, elevation: 2, borderColor: argonTheme.COLORS.PRIMARY, borderWidth: 2 }}
                            placeholder="Nombre"
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

                        <Block flex={1.05} right >

                          <Input
                            style={{ borderRadius: 20, elevation: 2, borderColor: argonTheme.COLORS.PRIMARY, borderWidth: 2 }}
                            placeholder="Apellido"
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
                      </Block>
                      <Block flex width={width * 0.8} style={{ marginBottom: 15 }}>

                        <Input
                          style={{ borderRadius: 20, elevation: 2, borderColor: argonTheme.COLORS.PRIMARY, borderWidth: 2 }}
                          placeholder="Correo Electrónico"
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
                        <Input
                          style={{ borderRadius: 20, elevation: 2, borderColor: argonTheme.COLORS.PRIMARY, borderWidth: 2 }}
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
                        <Input
                          style={{ borderRadius: 20, elevation: 2, borderColor: argonTheme.COLORS.PRIMARY, borderWidth: 2 }}
                          password
                          borderless
                          placeholder="Repite tu Contraseña"
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
                      {/* aqui */}

                      <Block row width={width * 0.5}>
                        <Checkbox
                          checkboxStyle={{
                            borderWidth: 3
                          }}
                          color={argonTheme.COLORS.PRIMARY}
                          label="Acepto los"
                        />
                        <Button
                          style={styles.termsButton}
                          color="transparent"
                          textStyle={{
                            color: argonTheme.COLORS.PRIMARY,
                            fontSize: 14
                          }}
                        >
                          Términos y condiciones
                        </Button>
                      </Block>
                      <Block middle>
                        <Button color="primary" style={styles.createButton}
                          onPress={() => navigation.navigate("App")} //aquí navega a la pantalla principal

                        >
                          <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                            CREAR UNA CUENTA
                          </Text>
                        </Button>
                      </Block>
                    </KeyboardAvoidingView>
                  </Block>
                </Block>
              </Block>
            </Block>
          </ImageBackground>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.6,
    marginTop: height * 0.02,
    backgroundColor: "#F4F5F7",
    borderRadius: 20,
    shadowColor: argonTheme.COLORS.BLACK,
    paddingLeft: 25,
    paddingRight: 25,
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
    borderBottomWidth: StyleSheet.hairlineWidth,

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
    shadowRadius: 8,
    borderWidth: 1,
    borderRadius: 10,
    shadowOpacity: 0.5,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14,
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    borderRadius: 20,
    marginTop: 25
  },
  termsButton: {
    width: width * 0.4,
    elevation: 0
  }
});

export default Register;
