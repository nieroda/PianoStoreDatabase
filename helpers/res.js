import db from '../dal/dbinsert';
import dbquery from '../dal/dbquery';

exports.getPiano = (req, res) => {
    res.render('insertPiano');
}

exports.addPiano = (req, res) => {
  /*
  console.log(req.body);
    db.insertUniversal(req.body.Piano, 'Piano')
    .then(res.redirect('success'))
    .catch(err => {
        console.log(err);
        res.redirect('error');
    });
    */
    db.insertUniversal(req.body, 'Piano')
    .then(res.send('{success: true}'))
    .catch(err => {
      res.send(`{error: ${error}}`);
    })

}

exports.getsalesman = (req, res) => {
    res.render('insertsalesman');
}

exports.addsalesman = (req, res) => {
    db.insertUniversal(req.body.Salesman, 'Salesman')
    .then(res.redirect('success'))
    .catch(err => {
        console.log(err);
        res.redirect('error');
    })
}

exports.getSale = (req, res) => {
    res.render('insertsale');
}

exports.addSale = (req, res) => {
    db.insertUniversal(req.body.Sale, 'Sale')
    .then(res.redirect('success'))
    .catch(err => {
        console.log(err);
        res.redirect('error');
    });
}

exports.getRental = (req, res) => {
    res.render('insertrental');
}

exports.addRental = (req, res) => {
    db.insertUniversal(req.body.Rental, 'Rental')
    .then(res.redirect('success'))
    .catch(err => {
        console.log(err);
        res.redirect('error');
    })
}

exports.getConsign = (req, res) => {
    res.render('insertconsignment');
}

exports.addConsign = (req, res) => {
    db.insertUniversal(req.body.Consignment, 'Consignment')
    .then(res.redirect('success'))
    .catch(err => {
        console.log(err);
        res.redirect('error');
    })
}


exports.getUpdateConsign = (req, res) => {
    res.render('sellconsignment')
}

exports.updateConsign = (req, res) => {
    dbquery.soldConsignment(req.body.ConsignmentSale)
    .then(result => {
      result.changedRows === 0 ? res.redirect('error') : res.redirect('success');
    })
    .catch(err => {
        console.log(err);
        res.redirect('error');
    });
}

exports.updateRental = (req, res) => {
    res.render('endrental');
}

exports.putRental = (req, res) => {
    dbquery.endRental(req.body.serial_number)
    .then(result => {
      result.changedRows === 0 ? res.redirect('error') : res.redirect('success');
    })
    .catch(err => {
        console.log(err);
        res.redirect('error');
    });
}


exports.success = (req, res) => {
    res.render('success');
}

exports.error = (req, res) => {
    res.render('error');
}
/*
exports.getsalesresult = (req, res) => {
    Promise.all([dbquery.getSales(), dbquery.getRentals(), dbquery.getSale(), dbquery.getConsign()])
    .then(result => {
        let [ Sales, Rental, Sale, Cons ] = result;
        res.render('salesresult', {Sales, Rental, Sale, Cons});
    })
    .catch(err => {
        console.log(err);
        res.redirect('error');
    });
}
*/

exports.getsalesresult = (req, res) => {
    Promise.all([dbquery.getSales(), dbquery.getRentals(), dbquery.getSale(), dbquery.getConsign()])
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        console.log(err);
        res.redirect('error');
    });
}
