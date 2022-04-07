import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  Image,
  ScrollView
} from "react-native";
import { Block, Card, Text, theme } from "galio-framework";

import {
  Button, Icon, Input, Header,
} from "../components";
import { Images, argonTheme } from "../constants";


const { width, height } = Dimensions.get("screen");

class Profile extends React.Component {

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
            <Block style={styles.registerContainer}>
              <Block middle style={styles.avatarContainer}>
                <Image source={Images.logoNormal} //logo principal arriba
                  style={styles.avatar} />
              </Block>

              <ScrollView
                showsVerticalScrollIndicator={true}
              >
                <Block flex center width={width * 0.8}  >
                  <Block flex={0.2} >
                    <Text color="#5A7E64" size={20} bold style={{ textAlign: 'center', marginTop: 20, marginBottom: 10 }} >
                      Nombre Apellido</Text>
                    <Text color="#8898AA" size={16} style={{
                      marginBottom: 10, textAlign: 'center'
                    }} >
                      Carrera 27, Calle 34.
                      {"\n"}Barquisimeto.
                    </Text>

                  </Block>
                  <Block row flex >
                    <Block center>
                      <Text color="#5A7E64" size={50} bold style={{ marginTop: 5 }} >
                        2 </Text>
                      <Text color="#8898AA" size={16} style={{
                        marginBottom: 10,
                      }}>Pedidos
                      </Text>
                    </Block>
                    <Block style={styles.verticaldivider} />
                    <Block center>
                      <Text color="#5A7E64" size={50} bold style={{ marginTop: 5 }} >
                        30 </Text>
                      <Text color="#8898AA" size={16} style={{
                        marginBottom: 10,
                      }}>Comentarios
                      </Text>
                    </Block>
                  </Block>

                  <Block flex >
                    <Block flex width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Block middle style={{ marginTop: 10, marginBottom: 16 }}>
                        <Block style={styles.divider} />
                        <Text color="#5A7E64" size={20} bold style={{ textAlign: 'left', marginTop: 20, marginBottom: 10 }} >
                          Tus Pedidos más recientes:</Text>

                      </Block>

                      <Block center>
                        <Button color="primary" style={styles.createButton}
                          onPress={() => navigation.navigate("App")} //aquí navega a la pantalla principal
                        >
                          <Text bold size={14} color={argonTheme.COLORS.PRIMARY}>
                            VER TODOS
                          </Text>
                        </Button>
                        <Button color="primary" style={styles.createButton}
                          onPress={() => navigation.navigate("App")} //aquí navega a la pantalla principal
                        >
                          <Text bold size={14} color={argonTheme.COLORS.PRIMARY}>
                            VER TODOS
                          </Text>
                        </Button>
                        <Button color="primary" style={styles.createButton}
                          onPress={() => navigation.navigate("App")} //aquí navega a la pantalla principal
                        >
                          <Text bold size={14} color={argonTheme.COLORS.PRIMARY}>
                            VER TODOS
                          </Text>
                        </Button>
                        <Button color="primary" style={styles.createButton}
                          onPress={() => navigation.navigate("App")} //aquí navega a la pantalla principal
                        >
                          <Text bold size={14} color={argonTheme.COLORS.PRIMARY}>
                            VER TODOS
                          </Text>
                        </Button>
                        <Button color="primary" style={styles.createButton}
                          onPress={() => navigation.navigate("App")} //aquí navega a la pantalla principal
                        >
                          <Text bold size={14} color={argonTheme.COLORS.PRIMARY}>
                            VER TODOS
                          </Text>
                        </Button>
                      </Block>
                    </Block>
                    {/* aqui */}


                  </Block>
                </Block>
              </ScrollView>
            </Block>
          </Block >
        </ImageBackground >
      </Block >

    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.68,
    marginTop: height * 0.08,
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
    zIndex: 1

  },


  createButton: {
    width: width * 0.7,
    borderRadius: 20,
    borderColor: argonTheme.COLORS.PRIMARY,
    borderWidth: 1,
    backgroundColor: argonTheme.COLORS.WHITE,
    marginTop: 5,
    marginBottom: width * 0.1,
  },
  profileCard: {
    position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 80,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.PRIMARY,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 25,
    shadowOpacity: 0.2,
  }, avatarContainer: {
    position: "relative",
    marginTop: -80,

  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 85,
    borderColor: "white",
    borderWidth: 4,
    zIndex: 3

  }, nameInfo: {
    marginTop: 0
  },
  divider: {
    width: "100%",
    borderWidth: 1,
    borderColor: argonTheme.COLORS.PRIMARY
  },
  verticaldivider: {
    width: "0.5%",
    borderWidth: 1,
    borderColor: argonTheme.COLORS.PRIMARY,
    marginHorizontal: 40
  },
  termsButton: {
    width: width * 0.4,
    elevation: 0,
  },

});

export default Profile;
