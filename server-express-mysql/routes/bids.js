var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", function(req, res, next) {
  models.Bid.findAll().then(bids => res.json(bids));
});

router.post("/", function(req, res, next) {
  let newBids = new models.Bid();
  newBid.contactFirstName = req.body.contactFirstName;

  newBid.isDeleted = req.body.isDeleted; //changed the complete over but think it should be the option since this shouldnt be here-SGar
  newBid.save().then(bid => res.json(bid));
});

router.delete("/:id", function(req, res, next) {
  let bidId = parseInt(req.params.id);
  models.Bid.findByPk(bidId)
    .then(bid => bid.destroy())
    .then(() => res.send({ bidId }))
    .catch(err => res.status(400).send(err));
});

router.put("/:id", function(req, res, next) {
  models.Bid.update(
    {
      contactFirstName: req.body.contactFirstName,
      contactLastName: req.body.contactFirstName,
      jobDescription: req.body.jobDescription,
      dateOfOriginalBid: req.body.dateOfOriginalBid,
      amountOfOriginalBid: req.body.amountOfOriginalBid,
      address: req.body.address,
      city:req.body.city,
      isDeleted: req.body.isDeleted //shouldnt be here converted the completed not completed think we should incorporate the completed original
    },
    {
      where: { id: parseInt(req.params.id) }
    }
  ).then(bid => res.json(bid));
});

module.exports = router;
