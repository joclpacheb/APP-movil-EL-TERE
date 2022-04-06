import React from "react";
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    StatusBar,
    KeyboardAvoidingView,
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import {
    Button, Icon, Input, Header, Select,
} from "../components";
import { Images, argonTheme } from "../constants";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { HeaderHeight } from "../constants/utils";

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
                                    Recupera{"\n"}Tu Cuenta
                                </Text>
                            </Block>
                        </Block>

                        <Block style={styles.registerContainer}>

                            <Block flex center width={width * 0.8}  >
                                <Text color="#5A7E64" size={16} bold style={{ textAlign: 'center', marginTop: 20, marginBottom: 10 }} >
                                    ¡No te preocupes!</Text>
                                <Text color="#8898AA" size={16} style={{ marginBottom: 10, textAlign: 'center' }} >
                                    Recupera el acceso a tu cuenta ingresando tu dirección de correo electrónico y te enviaremos un correo de recuperación:
                                </Text>


                                <Block flex center >
                                    <KeyboardAvoidingView
                                        behavior="padding"
                                        enabled
                                    >
                                        <Block row space="evenly">

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




                                            <Block center>
                                                <Button color="primary" style={styles.createButton}
                                                //aquí debería enviar el correo
                                                >
                                                    <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                                                        ENVIAR CORREO
                                                    </Text>
                                                </Button>
                                            </Block>

                                        </Block>
                                        {/* aqui */}

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
    registerContainer: {
        width: width * 0.9,
        height: height * 0.30,
        marginTop: height * 0.05,
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
