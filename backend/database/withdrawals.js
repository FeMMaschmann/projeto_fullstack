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

  const sql = "SELECT * FROM Withdrawals";
  cliente.query(sql, (err, result) => {
    if (err) {
      callback(err, undefined);
    } else {
      callback(undefined, result.rows);
    }
    cliente.end();
  });
};

exports.insert = (client, callback) => {
  const cliente = new Client(conexao);
  cliente.connect();

  const sql =
    "INSERT INTO Withdrawals(BookId, ClientId, WithdrawDate) VALUES ($1, $2, NOW()) RETURNING *";
  const values = [client.registration, client.name, client.phone];

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

  const sql = "SELECT * FROM Withdrawals WHERE id = $1";
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

exports.update = (id, client, callback) => {
  const cliente = new Client(conexao);
  cliente.connect();

  const sql =
    "UPDATE Withdrawals SET DevolutionDate = $1 WHERE id = $4 RETURNING *";
  const values = [client.name, client.registration, client.phone, id];

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

  const sql = "DELETE FROM Withdrawals WHERE id = $1 RETURNING *";
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
