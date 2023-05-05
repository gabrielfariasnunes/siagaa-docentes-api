const axios = require("axios");
const { session } = require("../helpers/env");
const { toFormDataEnconded } = require("../helpers/form");

const BASE_HTTP_URL = "https://sigaa.ufpa.br";
const BASE_HTTP_PATH = "/sigaa/public/docente/busca_docentes.jsf";

const http = axios.default.create({
  baseURL: BASE_HTTP_URL,
  headers: {
    Cookie: session,
  },
});

exports.request = async (data) => {
  return http.post(BASE_HTTP_PATH, toFormDataEnconded(data));
};
