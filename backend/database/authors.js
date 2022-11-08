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

  const sql = "SELECT * FROM Authors";
  cliente.query(sql, (err, result) => {
    if (err) {
      callback(err, undefined);
    } else {
      callback(undefined, result.rows);
    }
    cliente.end();
  });
};

exports.insert = (author, callback) => {
  const cliente = new Client(conexao);
  cliente.connect();

  const sql =
    "INSERT INTO Authors(Name, Country, CreationDate) VALUES ($1, $2, NOW()) RETURNING *";
  const values = [author.name, author.country];

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

  const sql = "SELECT * FROM Authors WHERE id = $1";
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

exports.update = (id, author, callback) => {
  const cliente = new Client(conexao);
  cliente.connect();

  const sql =
    "UPDATE Authors SET Name = $1, Country = $2 WHERE id = $3 RETURNING *";
  const values = [author.name, author.country, id];

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

  const sql = "DELETE FROM Authors WHERE id = $1 RETURNING *";
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
