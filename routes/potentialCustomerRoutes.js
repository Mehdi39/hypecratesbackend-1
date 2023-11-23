const express = require('express');
const router = express.Router();

const {
    addPotentialCustomer,
    getAllPotentialCustomer
} = require("../controller/potentialCustomer");


router.post("/add", addPotentialCustomer);

router.get("/", getAllPotentialCustomer)

module.exports = router;