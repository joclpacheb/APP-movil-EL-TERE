import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { Block, Checkbox, Text } from "galio-framework";

import {
  Button, Icon, Input, Header, Select,
} from "../components";
import { Images, argonTheme } from "../constants";

const { width, height } = Dimensions.get("screen");

class Register extends React.Component {
  render() {
    const { navigation } = this.props;
    return (

      <Block style={{
        flex: 1,
      }}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block >
            <Header back title="" navigation={this.props.navigation} transparent white bigIcon />
          </Block>
          <Block safe flex center>
            <Block row space="evenly">
              <Block flex left style={{ paddingLeft: 30 }}>
                <Text color="white" bold size={45} style={{ textAlign: 'left', marginTop: 5 }} >
                  Únete a{"\n"}EL TERE
                </Text>
              </Block>
            </Block>

            <Block style={styles.registerContainer}>
              <ScrollView
                showsVerticalScrollIndicator={true}
              >
                <Block flex center width={width * 0.8}  >
                  <Block flex={0.2} >
                    <Text color={argonTheme.COLORS.VERDECLARO} size={16} bold style={{ textAlign: 'left', marginTop: 20, marginBottom: 10 }} >
                      ¡Queremos conocerte!</Text>
                    <Text color="#8898AA" size={16} style={{ marginBottom: 10 }} >
                      Crea tu perfil personalizado llenando los siguientes campos:
                    </Text>
                  </Block>

                  <Block flex center >
                    <KeyboardAvoidingView
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
                                name="user"
                                family="antdesign"
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
                                name="user"
                                family="antdesign"
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
                        <Input
                          style={{ borderRadius: 20, elevation: 2, borderColor: argonTheme.COLORS.PRIMARY, borderWidth: 2 }}
                          borderless
                          placeholder="Teléfono (Ej: 04265555555)"
                          iconContent={
                            <Icon
                              size={16}
                              color={argonTheme.COLORS.ICON}
                              name="phone"
                              family="antdesign"
                              style={styles.inputIcons}
                            />
                          }
                        />
                        <Input
                          style={{ borderRadius: 20, elevation: 2, borderColor: argonTheme.COLORS.PRIMARY, borderWidth: 2 }}
                          borderless
                          placeholder="Fecha de Nacimiento (Ej: dd/mm/aaaa)"
                          iconContent={
                            <Icon
                              size={16}
                              color={argonTheme.COLORS.ICON}
                              name="calendar"
                              family="antdesign"
                              style={styles.inputIcons}
                            />
                          }
                        />
                        <Select
                          defaultIndex={1}
                          title="Género"
                          options={["Femenino", "Masculino"]}
                        />
                        <Input
                          style={{ borderRadius: 20, elevation: 2, borderColor: argonTheme.COLORS.PRIMARY, borderWidth: 2 }}
                          borderless
                          placeholder="Dirección de Habitación"
                          iconContent={
                            <Icon
                              size={16}
                              color={argonTheme.COLORS.ICON}
                              name="enviromento"
                              family="antdesign"
                              style={styles.inputIcons}
                            />
                          }
                        />
                        <Text color="#5A7E64" size={16} bold style={{ textAlign: 'left', marginTop: 10, marginBottom: 10 }} >
                          Intereses</Text>
                        <Text color="#8898AA" size={16} style={{ marginBottom: 5 }} >
                          Elige las áreas que sean de tu interés:
                        </Text>

                        <Block flex row center>
                          <Checkbox
                            checkboxStyle={{
                              borderWidth: 2,
                            }}
                            color={argonTheme.COLORS.PRIMARY}
                            label="Acepto los"
                          />
                          <Button
                            style={styles.termsButton}
                            color="transparent"
                            textStyle={{
                              color: argonTheme.COLORS.PRIMARY,
                              fontSize: 14,
                              fontWeight: "bold"
                            }}
                          >
                            Términos y condiciones
                          </Button>
                        </Block>

                        <Block center>
                          <Button color="primary" style={styles.createButton}
                            onPress={() => navigation.navigate("App")} //aquí navega a la pantalla principal
                          >
                            <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                              QUIERO UNIRME
                            </Text>
                          </Button>
                        </Block>

                      </Block>
                      {/* aqui */}

                    </KeyboardAvoidingView>
                  </Block>
                </Block>
              </ScrollView>
            </Block>
          </Block>
        </ImageBackground>
      </Block>

    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.68,
    marginTop: height * 0.02,
    backgroundColor: "#F4F5F7",
    borderRadius: 20,
    shadowColor: argonTheme.COLORS.BLACK,
    paddingLeft: 10,
    paddingRight: 10,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
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
    paddingBottom: 20
  },
  createButton: {
    width: width * 0.5,
    borderRadius: 20,
    marginTop: 5,
    marginBottom: width * 0.1,
  },
  termsButton: {
    width: width * 0.4,
    elevation: 0,
  }
});

export default Register;
