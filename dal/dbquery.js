import sql from 'mysql';
import db from './dbconnection';



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
exports.soldConsignment = (object) => {
  return new Promise((resolve, reject) => {
    let updatequery =  `update ConsignmentSale set datesold=CURDATE(), salesman_id=${connection.escape(object.salesman_id)} where serial_number=${connection.escape(object.serial_number)}`;
    console.log(updatequery);
    connection.query(updatequery, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
}

exports.endRental = (serial_number) => {
  return new Promise((resolve, reject) => {
    let endRental = `update Rental set date_ended=CURDATE() where serial_number=${connection.escape(serial_number)}`;

    connection.query(endRental, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
}


exports.getRentals = () => {
  return new Promise((resolve, reject) => {
    let myquery = 'select renter_first_name, renter_last_name, rental_rate, date_started, date_ended, serial_number from Rental';
    connection.query(myquery, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
}

exports.getSale = () => {
  return new Promise((resolve, reject) => {
    let myquery = 'select purchaser_first_name, purchaser_last_name, saledate, sale_price, dealer_price from Sale left join Piano on Sale.serial_number = Piano.serial_number';
    connection.query(myquery, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
}

exports.getConsign = () => {
  return new Promise((resolve, reject) => {
    let myquery = 'select owner_first_name, owner_last_name, datestarted, datesold, store_cut from ConsignmentSale';
    connection.query(myquery, (err, result) => {
      err ? reject(err) : resolve(result);
    })
  })
}