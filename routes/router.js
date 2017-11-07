import express from 'express';
import helpers from '../helpers/res';
const Router = express.Router();


Router.route('/success')
    .get(helpers.success)

Router.route('/error')
    .get(helpers.error)

Router.route('/insertpiano')
    .get(helpers.getPiano)
    .post(helpers.addPiano)
  
Router.route('/insertsalesman')
   .get(helpers.getsalesman)
   .post(helpers.addsalesman)
  
Router.route('/insertsale')
    .get(helpers.getSale)
    .post(helpers.addSale)
  
Router.route('/insertrental')
    .get(helpers.getRental)
    .post(helpers.addRental)

Router.route('/insertconsignment')
    .get(helpers.getConsign)
    .post(helpers.addConsign)

Router.route('/salesresult')
    .get(helpers.getsalesresult)
 
 /*
Router.route('/currentrentals')
    .get(helpers.getcurrentrentals)
  */


module.exports = Router;


