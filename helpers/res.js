import db from '../dal/dbinsert';
import dbquery from '../dal/dbquery';

exports.getPiano = (req, res) => {
    res.render('insertPiano');
}

exports.addPiano = (req, res) => {
    db.insertUniversal(req.body.Piano, 'Piano')
    .then(result => {
        console.log(result);
        res.redirect('success');
    })
    .catch(err => {
        console.log(err);
        res.redirect('error');
    })
}

exports.getsalesman = (req, res) => {
    res.render('insertsalesman');
}

exports.addsalesman = (req, res) => {
    db.insertUniversal(req.body.Salesman, 'Salesman')
    .then(result => {
        console.log(result);
        res.redirect('success');
    })
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
    .then(result => {
        console.log(result);
        res.redirect('success');
    })
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
    .then(result => {
        console.log(result);
        res.redirect('success');
    })
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
    .then(result => {
        console.log(result);
        res.redirect('success');
    })
    .catch(err => {
        console.log(err);
        res.redirect('error');
    })
}



exports.getsalesresult = (req, res) => {
    dbquery.getSales()
    .then((result) => {
        res.render('salesresult', {result});
    })
    .catch((err) => {
        console.log(err);
        res.redirect('error');
    })
}




exports.success = (req, res) => {
    res.render('success');
}

exports.error = (req, res) => {
    res.render('error');
}