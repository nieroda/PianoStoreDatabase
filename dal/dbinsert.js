
import sql from 'mysql';
import db from './dbconnection';

const connection = sql.createConnection(db.config);

exports.insertUniversal = (data, item) => {
  return new Promise((resolve, reject) => {
    let myquery = `insert into ${item} set ?`;
    connection.query(myquery, data, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
}
