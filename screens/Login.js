import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  View,
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import { useAuthContext, useToast } from "../hooks/global";
import { authAPI } from "../apis/authAPI";

const { width, height } = Dimensions.get("screen");

const Login = ({ navigation }) => {
  // hooks
  const { showErrorToast } = useToast();
  const { dispatch } = useAuthContext();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChangeForm = (fieldName = "", value) => {
    setForm((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const login = async () => {
    try {
      const { data } = await authAPI.login(form);

      // TODO: delete after connect to backend
      await AsyncStorage.setItem(
        "@accessToken",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODk5MDgwZDYyNzU3MDAxNjQxODI1YyIsImlkTnVtYmVyIjoyNTE0NzI4NCwiaWRCdXNpbmVzcyI6IjYxODk5MDgwZDYyNzU3MDAxNjQxODI1ZSIsInR5cGVVc2UiOiJCIiwicHJpbWFyeUN1cnJlbmN5IjoiQnMiLCJwbGFuIjoiQiIsImlhdCI6MTY0OTM2NzQwMSwiZXhwIjoxNjQ5NTQwMjAxfQ.Cm_4AwmMaebNOFwXkosXd6_cCnF-PP8c-J3WbkOHx4k"
      );

      dispatch({
        type: "LOGIN",
        payload: {
          user: form,
        },
      });
    } catch (error) {
      showErrorToast("Error");
    }
  };

  return (
    <Block flex middle>
      <StatusBar hidden />
      <ImageBackground
        source={Images.RegisterBackground}
        style={{ width, height, zIndex: 1 }}
      >
        <Block safe flex middle>
          <Block>
            <Image
              source={Images.logoBlanco} //logo principal arriba
              style={{
                width: 150,
                height: 150,
                marginBottom: theme.SIZES.BASE * 2.5,
              }}
            />
          </Block>
          <Block style={styles.registerContainer}>
            <Block flex>
              <Block flex={0.2} middle>
                <Text color="#8898AA" size={16}>
                  Inicia sesi??n con tus datos:
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
                      style={{
                        borderRadius: 20,
                        elevation: 2,
                        borderColor: argonTheme.COLORS.PRIMARY,
                        borderWidth: 2,
                      }}
                      value={form.email}
                      onChangeText={(val) => handleChangeForm("email", val)}
                      placeholder="Correo Electr??nico"
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
                      style={{
                        borderRadius: 20,
                        elevation: 2,
                        borderColor: argonTheme.COLORS.PRIMARY,
                        borderWidth: 2,
                      }}
                      password
                      borderless
                      value={form.password}
                      onChangeText={(val) => handleChangeForm("password", val)}
                      placeholder="Contrase??a"
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
                    <Button
                      color="primary"
                      style={styles.createButton}
                      onPress={login} //aqu?? navega a la pantalla principal
                    >
                      <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                        INICIAR SESI??N
                      </Text>
                    </Button>
                    <Button
                      color="secondary"
                      style={styles.createButton}
                      onPress={() => navigation.navigate("Account")} //aqu?? navega a la pantalla principal
                    >
                      <Text bold size={14} color={argonTheme.COLORS.PRIMARY}>
                        ??NETE A EL TERE
                      </Text>
                    </Button>

                    <View style={styles.container}>
                      <View style={styles.item}>
                        <Button
                          style={styles.termsButton}
                          color="transparent"
                          textStyle={{
                            color: argonTheme.COLORS.PRIMARY,
                            fontSize: 14,
                            fontWeight: "bold",
                          }}
                          onPress={() =>
                            navigation.navigate("PasswordRecovery")
                          } //aqu?? navega a la pantalla principal
                        >
                          ??Olvidaste tu contrase??a?
                        </Button>
                      </View>
                    </View>
                  </Block>
                </KeyboardAvoidingView>
              </Block>
            </Block>

            <Block flex={0.4} middle style={styles.socialConnect}>
              <Text color="#8898AA" size={16}>
                ??Primera vez usando la App?
              </Text>
              <Block row style={{ marginTop: theme.SIZES.BASE }}>
                <Button
                  style={styles.socialButtons}
                  onPress={() => navigation.navigate("App")} //aqu?? navega a la pantalla principal
                >
                  <Block row>
                    <Text style={styles.socialTextButtons}>
                      ENTRAR COMO INVITADO/A
                    </Text>
                  </Block>
                </Button>
              </Block>
            </Block>
          </Block>
        </Block>
      </ImageBackground>
    </Block>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.6,
    backgroundColor: "#F4F5F7",
    borderRadius: 24,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden",
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: argonTheme.COLORS.PRIMARY,
    borderTopWidth: 2,
  },
  socialButtons: {
    width: width * 0.7,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.ERROR,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderColor: argonTheme.COLORS.PRIMARY,
    borderWidth: 1,
    borderRadius: 20,
    shadowOpacity: 0.5,
    elevation: 1,
  },
  container: {
    flex: 1,
  },
  item: {
    width: "50%", // is 50% of container width
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 16,
  },
  inputIcons: {
    marginRight: 12,
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 10,
  },
  createButton: {
    width: width * 0.5,
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: argonTheme.COLORS.PRIMARY,
  },
  termsButton: {
    width: width * 0.5,
    elevation: 0,
    marginTop: 0,
  },
});

export default Login;
