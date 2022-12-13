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
    "SELECT w.*, b.name 'bookname', c.name 'clientname' FROM withdrawals w JOIN books b ON w.bookid = b.id JOIN clients c ON w.clientid = c.id";
  cliente.query(sql, (err, result) => {
    if (err) {
      callback(err, undefined);
    } else {
      callback(undefined, result.rows);
    }
    cliente.end();
  });
};

exports.insert = (withdrawal, callback) => {
  const cliente = new Client(conexao);
  cliente.connect();

  const sql =
    "INSERT INTO withdrawals(bookid, clientid, withdrawdate) VALUES ($1, $2, NOW()) RETURNING *";
  const values = [withdrawal.bookid, withdrawal.clientid];

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

  const sql = "SELECT * FROM withdrawals WHERE id = $1";
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

exports.update = (id, withdrawal, callback) => {
  const cliente = new Client(conexao);
  cliente.connect();

  const sql =
    "UPDATE withdrawals SET bookid = $1, clientid = $2, devolutiondate = $3 WHERE id = $4 RETURNING *";
  const values = [
    withdrawal.bookid,
    withdrawal.clientid,
    withdrawal.devolutiondate,
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

  const sql = "DELETE FROM withdrawals WHERE id = $1 RETURNING *";
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
