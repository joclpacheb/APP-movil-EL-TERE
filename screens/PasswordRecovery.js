import React from "react";
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    StatusBar,
    KeyboardAvoidingView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { Colors } from "react-native/Libraries/NewAppScreen";

const { width, height } = Dimensions.get("screen");

class PasswordRecovery extends React.Component {
    render() {
        return (
            <Block flex middle>
                <StatusBar hidden />
                <ImageBackground
                    source={Images.RegisterBackground}
                    style={{ width, height, zIndex: 1 }}
                >
                    <Block safe flex middle>

                        <Block style={styles.Container}>

                            {/* <Block flex={0.25} middle style={styles.socialConnect}>
                <Text color="#8898AA" size={16}>
                  Crea una cuenta con:
                </Text>
                <Block row style={{ marginTop: theme.SIZES.BASE }}>

                  <Button style={styles.socialButtons}>
                    <Block row>
                      <Icon
                        name="logo-google"
                        family="Ionicon"
                        size={14}
                        color={"black"}
                        style={{ marginTop: 2, marginRight: 5 }}
                      />
                      <Text style={styles.socialTextButtons}>GOOGLE</Text>
                    </Block>
                  </Button>
                </Block>
              </Block> */}
                            <Block flex>
                                <Block flex={0.4} middle>
                                    <Text color="#8898AA" size={16}>
                                        Recupera el acceso a tu Cuenta ingresando:
                                    </Text>

                                </Block>
                                <Block flex center>
                                    <KeyboardAvoidingView
                                        style={{ flex: 1 }}
                                        behavior="padding"
                                        enabled
                                    >
                                        <Block width={width * 0.8} style={{ marginBottom: 15 }}>

                                        </Block>
                                        <Block width={width * 0.84} style={{ marginBottom: 15 }}>
                                            <Input
                                                borderless
                                                style={{ borderRadius: 20, elevation: 1 }}
                                                placeholder="Tu Correo Electrónico"
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

                                        <Block middle>
                                            <Button color="primary" style={styles.createButton}>
                                                <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                                                    ENVIAR CORREO DE RECUPERACIÓN
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
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        width: width * 0.9,
        height: height * 0.3,
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
        width: width * 0.8,
        borderRadius: 20,
        marginTop: 25
    },
    termsButton: {
        width: width * 0.4,
        elevation: 0
    }
});

export default PasswordRecovery;