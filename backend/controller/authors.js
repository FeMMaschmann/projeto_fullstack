const database = require("../database/authors");

exports.get = (req, res) => {
  database.get((err, authorList) => {
    if (err) {
      return res.status(500).json({ erro: err });
    } else {
      return res.json(authorList);
    }
  });
};

exports.insert = (req, res) => {
  const author = req.body;
  database.insert(author, (err, insertedAuthor) => {
    if (err) {
      return res.status(500).json({ erro: err });
    } else {
      return res.status(201).json(insertedAuthor);
    }
  });
};

exports.getById = (req, res) => {
  const id = req.params.id;

  database.getById(id, (err, author) => {
    if (err) {
      return res.status(500).json({ erro: err });
    } else {
      if (author) return res.json(author);
      else {
        return res.status(404).json({ erro: "Autor nao encontrado" });
      }
    }
  });
};

exports.update = (req, res) => {
  const author = req.body;
  const id = req.params.id;

  database.update(id, author, (err, updatedAuthor) => {
    if (err) {
      return res.status(500).json({ erro: err });
    } else {
      if (updatedAuthor) return res.json(updatedAuthor);
      else {
        return res.status(404).json({ erro: "Autor nao encontrado" });
      }
    }
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  database.delete(id, (err, deletedAuthor) => {
    if (err) {
      return res.status(500).json({ erro: err });
    } else {
      if (deletedAuthor) return res.json(deletedAuthor);
      else {
        return res.status(404).json({ erro: "Autor nao encontrado" });
      }
    }
  });
};
