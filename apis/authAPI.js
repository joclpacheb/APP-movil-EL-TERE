import { http } from "./http";

const BASE_URL = "user";

export const authAPI = {
  register: async (form = {}) => {
    const { data } = await http.post(BASE_URL, form);
    return data;
  },
  login: async (form = {}) => {
    const { data } = await http.post(BASE_URL, form);
    return data;
  },
};
