const asyncHandler = require('express-async-handler')
const Receipt = require('../models/receiptModel')


// @desc  get receipt
//@route  GET /api/receipt
//@access Private
const getReceipt = asyncHandler(async(req, res) => {
    const receipts = await Receipt.find();
    res.status(200).json(receipts);
  });
// @desc  post receipt
//@route  POST /api/receipt
//@access Private
const postReceipt =  asyncHandler(async(req, res) => {
    if(!req.body.text || !req.body.cost || !req.body.location) {
        res.status(400)
        throw new Error('Please input all 3 fields')
    }

    const receipt = await Receipt.create({
        text: req.body.text,
        cost: req.body.cost,
        location: req.body.location,
    })
    res.status(200).json(receipt)
});

// @desc  update receipt
//@route  PUT /api/receipt/:id
//@access Private
const updateReceipt = asyncHandler(async (req, res) => {
    const receipt = await Receipt.findById(req.params.id);

    if (!receipt) {
        res.status(404).json({ message: `Receipt not found, please try again` });
}
const updateRec = await Receipt.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateRec);
});

// @desc   delete receipt
//@route  DELETE /api/receipt/:id
//@access Private
const deleteReceipt = asyncHandler(async (req, res) => {
    const receipt = await Receipt.findById(req.params.id);
    if (!receipt) {
      res.status(404).json({ message: `Receipt not found, please try again` });
    }
  
    await receipt.remove();
  
    res.status(200).json({ id: req.params.id });
  });

module.exports = {
getReceipt, postReceipt, updateReceipt, deleteReceipt,
}