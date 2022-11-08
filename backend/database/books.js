const { Client } = require("pg");

const conexao = {
  user: "postgres",
  password: "postgres",
  host: "127.0.0.1",
  port: 5432,
  database: "fullstack_project",
};

exports.get = (callback) => {
  const cliente = new Client(conexao);
  cliente.connect();

  const sql = "SELECT * FROM Books";
  cliente.query(sql, (err, result) => {
    if (err) {
      callback(err, undefined);
    } else {
      callback(undefined, result.rows);
    }
    cliente.end();
  });
};

exports.insert = (book, callback) => {
  const cliente = new Client(conexao);
  cliente.connect();

  const sql =
    "INSERT INTO Books(ISBN, Name, AuthorId, Publisher, Quantity, ReleaseDate, CreationDate) VALUES ($1, $2, $3, $4, $5, $6, NOW()) RETURNING *";
  const values = [
    book.isbn,
    book.name,
    book.authorId,
    book.publisher,
    book.quantity,
  ];

  cliente.query(sql, values, (err, result) => {
    if (err) {
      callback(err, undefined);
    } else {
      callback(undefined, result.rows[0]);
    }
    cliente.end();
  });
};

exports.getById = (id, callback) => {
  const cliente = new Client(conexao);
  cliente.connect();

  const sql = "SELECT * FROM Books WHERE id = $1";
  const values = [id];

  cliente.query(sql, values, (err, result) => {
    if (err) {
      callback(err, undefined);
    } else {
      callback(undefined, result.rows[0]);
    }
    cliente.end();
  });
};

exports.update = (id, book, callback) => {
  const cliente = new Client(conexao);
  cliente.connect();

  const sql =
    "UPDATE Books SET ISBN = $1, Name = $2, AuthorId = $3, Publisher = $4, Quantity = $5 WHERE id = $6 RETURNING *";
  const values = [
    book.isbn,
    book.name,
    book.authorId,
    book.publisher,
    book.quantity,
    id,
  ];

  cliente.query(sql, values, (err, result) => {
    if (err) {
      callback(err, undefined);
    } else {
      callback(undefined, result.rows[0]);
    }
    cliente.end();
  });
};

exports.delete = (id, callback) => {
  const cliente = new Client(conexao);
  cliente.connect();

  const sql = "DELETE FROM Books WHERE id = $1 RETURNING *";
  const values = [id];

  cliente.query(sql, values, (err, result) => {
    if (err) {
      callback(err, undefined);
    } else {
      callback(undefined, result.rows[0]);
    }
    cliente.end();
  });
};
