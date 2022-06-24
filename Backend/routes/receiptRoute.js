
const express = require('express')
const router = express.Router()

const {getReceipt, postReceipt, updateReceipt, deleteReceipt} = require('../controllers/receiptController')

router.route('/').get(getReceipt).post(postReceipt);
router.route('/:id').delete(deleteReceipt).put(updateReceipt);


module.exports = router

