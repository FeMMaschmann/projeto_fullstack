const { Client } = require("pg");

const conexao = {
  user: "postgres",
  password: "postgres",
  host: "127.0.0.1",
  port: 5432,
  database: "fullstack_projeto",
};

exports.get = (callback) => {
  const cliente = new Client(conexao);
  cliente.connect();

  const sql =
    "SELECT a.name as authorname, b.* FROM books b JOIN authors a ON b.authorid = a.id";
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
    "INSERT INTO books(isbn, name, authorid, publisher, quantity, releasedate, creationdate) VALUES ($1, $2, $3, $4, $5, $6, NOW()) RETURNING *";
  const values = [
    book.isbn,
    book.name,
    book.authorid,
    book.publisher,
    book.quantity,
    book.releasedate,
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

  const sql = "SELECT * FROM books WHERE id = $1";
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
    "UPDATE books SET isbn = $1, name = $2, authorid = $3, publisher = $4, quantity = $5, releasedate = $6 WHERE id = $7 RETURNING *";
  const values = [
    book.isbn,
    book.name,
    book.authorid,
    book.publisher,
    book.quantity,
    book.releasedate,
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

  const sql = "DELETE FROM books WHERE id = $1 RETURNING *";
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
