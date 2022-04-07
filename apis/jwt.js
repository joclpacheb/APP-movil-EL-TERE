import AsyncStorage from "@react-native-async-storage/async-storage";

import { http } from "./http";

const setSession = async (token = "") => {
  if (token) {
    await AsyncStorage.setItem("@token", token);
    http.defaults.headers.common.Authorization = `Token ${token}`;
  } else {
    await AsyncStorage.removeItem("@token");
    delete http.defaults.headers.common.Authorization;
  }
};

export { setSession };
