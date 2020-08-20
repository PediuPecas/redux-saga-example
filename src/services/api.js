import axios from "axios";
import querystring from "querystring";
const headers = {
  Accept: "application/json",
};

const api = axios.create({
  baseURL: "https://fococomunicacao.com.br/topus-video-react-api/",
  // baseURL: "http://localhost/topus-video-react-api/",
  headers,
});

const queryBuilder = (params) => {
  const cleanParams = {};
  Object.keys(params).forEach((key) => {
    const value = params[key];
    if (value) cleanParams[key] = value;
  });
  return querystring.stringify(cleanParams);
};

export { queryBuilder };
export default api;
