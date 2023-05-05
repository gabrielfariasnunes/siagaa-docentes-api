const { request } = require("#http");
const { parser } = require("#helpers/dom");

const NO_RESULTS = 0;
const DEFAULT_DEPARTAMENT = 0;

exports.searchTeacher = async (name) => {
  return new Promise(async (resolve, reject) => {
    const data = {
      form: "form",
      "form:nome": name,
      "form:departamento": DEFAULT_DEPARTAMENT,
      "form:buscar": "Buscar",
      "javax.faces.ViewState": "j_id6",
    };

    const response = await request(data);
    const results = [];

    const lines = parser(response.data).querySelectorAll(
      ".listagem > tbody > tr"
    );

    if (lines.length == NO_RESULTS) {
      reject();
      return;
    }

    lines.map((line) => {
      const td = line.querySelectorAll("td");
      const img = td[0].querySelector("img").getAttribute("src");
      td.forEach((item) => {
        const span = item.querySelectorAll("span");
        if (span[0] != undefined) {
          results.push({
            foto: `https://${response.request.host}${img}`,
            nome: span[0].text.trim(),
            departamento: span[1].text.trim(),
          });
        }
      });
    });
    resolve(results);
  });
};
