const database = require("../database/logins");

exports.getByEmailPass = (req, res) => {
  const id = req.params.id;

  database.getById(id, (err, client) => {
    if (err) {
      return res.status(500).json({ erro: err });
    } else {
      if (client) return res.json(client);
      else {
        return res.status(404).json({ erro: "Cliente nao encontrado" });
      }
    }
  });
};
