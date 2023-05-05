const { searchTeacher } = require("#repository");

const RESPONSE_ERROR_MESSAGE =
  "Nenhum docente foi encontrado de acordo com os critérios de busca informados";
const RESPONSE_ERROR = 404;

exports.searchTeacherController = (req, resp) => {
  const name = req.params.nome;
  searchTeacher(name)
    .then((results) => {
      resp.json(results);
    })
    .catch(() => {
      resp.status(RESPONSE_ERROR);
      resp.json({ error: RESPONSE_ERROR_MESSAGE });
    });
};
