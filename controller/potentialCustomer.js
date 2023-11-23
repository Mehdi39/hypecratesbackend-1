const PotentialCustomer = require('../models/PotentialCustomer');

const addPotentialCustomer = async (req, res) => {
    try {
        const newPotentialCustomer = req.body;

        const customer = await PotentialCustomer.create(newPotentialCustomer);

        res.status(200).json({
            successfull: true,
            data: customer
        })
    } catch (error) {
        console.error(error.message)
    }

}

const getAllPotentialCustomer = async (req, res) => {
    res.status(200).json({
        data: "getAllPotentialCustomer"
    })
}

module.exports = {
    addPotentialCustomer,
    getAllPotentialCustomer
}