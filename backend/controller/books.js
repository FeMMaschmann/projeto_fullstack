const database = require("../database/books");

exports.get = (req, res) => {
  database.get((err, bookList) => {
    if (err) {
      return res.status(500).json({ erro: err });
    } else {
      return res.json(bookList);
    }
  });
};

exports.insert = (req, res) => {
  const book = req.body;
  database.insert(book, (err, insertedBook) => {
    if (err) {
      return res.status(500).json({ erro: err });
    } else {
      return res.status(201).json(insertedBook);
    }
  });
};

exports.getById = (req, res) => {
  const id = req.params.id;

  database.getById(id, (err, book) => {
    if (err) {
      return res.status(500).json({ erro: err });
    } else {
      if (book) return res.json(book);
      else {
        return res.status(404).json({ erro: "Livro nao encontrado" });
      }
    }
  });
};

exports.update = (req, res) => {
  const book = req.body;
  const id = req.params.id;

  database.update(id, book, (err, updatedBook) => {
    if (err) {
      return res.status(500).json({ erro: err });
    } else {
      if (updatedBook) return res.json(updatedBook);
      else {
        return res.status(404).json({ erro: "Livro nao encontrado" });
      }
    }
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  database.delete(id, (err, deletedBook) => {
    if (err) {
      return res.status(500).json({ erro: err });
    } else {
      if (deletedBook) return res.json(deletedBook);
      else {
        return res.status(404).json({ erro: "Livro nao encontrado" });
      }
    }
  });
};
