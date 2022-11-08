const database = require("../database/clients");

exports.get = (req, res) => {
  database.get((err, clientList) => {
    if (err) {
      return res.status(500).json({ erro: err });
    } else {
      return res.json(clientList);
    }
  });
};

exports.insert = (req, res) => {
  const client = req.body;
  database.insert(client, (err, insertedClient) => {
    if (err) {
      return res.status(500).json({ erro: err });
    } else {
      return res.status(201).json(insertedClient);
    }
  });
};

exports.getById = (req, res) => {
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

exports.update = (req, res) => {
  const client = req.body;
  const id = req.params.id;

  database.update(id, client, (err, updatedClient) => {
    if (err) {
      return res.status(500).json({ erro: err });
    } else {
      if (updatedClient) return res.json(updatedClient);
      else {
        return res.status(404).json({ erro: "Cliente nao encontrado" });
      }
    }
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  database.delete(id, (err, deletedClient) => {
    if (err) {
      return res.status(500).json({ erro: err });
    } else {
      if (deletedClient) return res.json(deletedClient);
      else {
        return res.status(404).json({ erro: "Cliente nao encontrado" });
      }
    }
  });
};
