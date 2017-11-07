import sql from 'mysql';
import db from './dbconnection';
import moment from 'moment';


const connection = sql.createConnection(db.config, () => {
  console.log('Connected to database');
});

//A query utilizing a JOIN between at least 3 different tables
exports.getSales = () => {
  return new Promise((resolve, reject) => {
    let sales = 'select brand, model, dealer_price, sale_price, first_name from Piano left join Sale on Piano.serial_number = Sale.serial_number left join Salesman on Sale.salesman_id = Salesman.salesman_id where sale_price is not null;';

    connection.query(sales, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
}

//one non trivial data record modification
exports.soldConsignment = (salesman_id, owner_email) => {
  return new Promise((resolve, reject) => {
    let updatequery =  `update ConsignmentSale set datesold=${moment().format('YYYY-MM-DD')}, salesman_id=${salesman_id} where owner_email=${owner_email}`;

    connection.query(updatequery, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
}

exports.endRental = (renter_ssn) => {
  return new Promise((resolve, reject) => {
    let endRental = `update Rental set date_ended=${moment().format('YYYY-MM-DD')} where renter_ssn=${renter_ssn}`;

    connection.query(endRental, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
}
